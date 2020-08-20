import { ConvertionTypes, ITypes, VTypes } from './types';

export const data = [
    { id: 1, type: ConvertionTypes.TEMPERATURE, item: ITypes.KELVIN },
    { id: 2, type: ConvertionTypes.TEMPERATURE, item: ITypes.CELSIUS },
    { id: 3, type: ConvertionTypes.TEMPERATURE, item: ITypes.RANKINE },
    { id: 4, type: ConvertionTypes.TEMPERATURE, item: ITypes.FAHRENHEIT },
    { id: 5, type: ConvertionTypes.VOLUME, item: VTypes.LITRES },
    { id: 6, type: ConvertionTypes.VOLUME, item: VTypes.GALLONS },
    { id: 7, type: ConvertionTypes.VOLUME, item: VTypes.CUPS },
    { id: 8, type: ConvertionTypes.VOLUME, item: VTypes.TABLESPOONS },
    { id: 9, type: ConvertionTypes.VOLUME, item: VTypes.CUBIC_INCHES },
    { id: 10, type: ConvertionTypes.VOLUME, item: VTypes.CUBIC_FEETS },
];
