import { Request, Response, NextFunction } from 'express';
import { BaseRoute } from '../routes/base.route';
import { AppService } from '../services/app.service';
import { IRequest } from '../models';
import { round_one_decimal_place, convertion_type_validator } from '../utils/helpers';
import { data } from '../constants/ConversionTypes';

export class AppController extends BaseRoute {
    constructor() {
        super();
        this._initializeRoutes();
    }

    public _initializeRoutes() {
        this.router.post(`${this.path}/convert`, this.converter);
        this.router.get(`${this.path}/types`, this.getTypes);
    }

    public async converter(req: Request, res: Response, next: NextFunction) {
        try {
            const payload: IRequest = req.body;
            const { head, tail, answer, input_value } = payload;
            const $student_answer = round_one_decimal_place(answer);
            const $value = parseFloat(input_value);
            const { conclude, type } = convertion_type_validator(head, tail);

            if (conclude && head !== tail) {
                const { correct, message } = AppService.convert(head, tail, type, $value, $student_answer);
                return res.status(200).json({ correct, message });
            }

            res.status(200).json({ message: 'invalid' });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    public async getTypes(req: Request, res: Response) {
        try {
            console.log(data);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
}
