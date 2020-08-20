import { IRequest } from '../models';
import { ITypes, VTypes } from './ConversionTypes';

export const TestCase1: IRequest = {
    input_value: '44',
    head: ITypes.RANKINE,
    tail: ITypes.KELVIN,
    answer: '24.41',
};

export const TestCase2: IRequest = {
    input_value: '84.2',
    head: ITypes.FAHRENHEIT,
    tail: ITypes.RANKINE,
    answer: '543.94',
};
