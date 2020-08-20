import express from 'express';
import path from 'path';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

export class App {
    public app: any;
    public port: number;

    constructor(controllers: Array<any>, port: number) {
        this.app = express();
        this.port = port;
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.initialFrontend();
    }

    private initializeMiddlewares() {
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
    }

    private initializeControllers(controllers) {
        for (const controller of controllers) {
            this.app.use('/', controller.router);
        }
    }

    private initialFrontend() {
        this.app.use(express.static(path.join(__dirname, '../client/build')));
        this.app.get('*', (request, response) => {
            response.sendFile(path.join(__dirname + '../client/build/index.html'));
        });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log('App listening on port ' + this.port);
        });
    }
}
