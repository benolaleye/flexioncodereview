export interface ApiResponse<T> {
    ok: boolean;
    status: number;
    message: string;
}

interface ApiRequest<T = any> {
    body?: T;
    model?: T;
}

export enum HttpMethods {
    Get = 'GET',
    Post = 'POST',
}

export class ApiClient {
    private static abortController = new AbortController();

    public static getFetchConfig() {
        const host = `${window.location.protocol}//${window.location.host}`;
        const headers: Headers = new Headers();
        const corsOptions: Partial<RequestInit> = {
            mode: 'cors',
        };

        const isOrigin = process.env.REACT_APP_ROOT_URL === host;
        const options: RequestInit = {
            headers,
            signal: this.abortController.signal,
            ...(isOrigin ? {} : corsOptions),
        };

        return options;
    }

    private static async RequestType<ResponseType = any, RequestType = any>(
        method: HttpMethods,
        endpoint: string,
        request?: ApiRequest<RequestType>
    ): Promise<ApiResponse<ResponseType>> {
        this.abortController = new AbortController();
        const base = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8000';
        const requestContent: { body?: string | FormData } = {};

        if (request && request.body) {
            if ('finalize' in request.body) {
                (request.body as any).finalize();
            }

            requestContent.body = JSON.stringify(request.body);
        }

        try {
            const options: RequestInit = {
                ...this.getFetchConfig(),
                method,
                ...requestContent,
            };

            const response = await fetch(base + '/api/' + endpoint, options);
            const responseContent = (await response.json()) as ApiResponse<ResponseType>;

            return {
                ok: response.status === 200,
                status: response.status,
                message: responseContent.message,
            };
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    public static abort() {
        this.abortController.abort();
    }

    public static get<T>(endpoint: string) {
        return this.RequestType<T>(HttpMethods.Get, endpoint);
    }

    public static post<ResponseType>(endpoint: string, body?: any) {
        console.log(body);
        return this.RequestType<ResponseType>(HttpMethods.Post, endpoint, { body });
    }
}
