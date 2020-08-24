import * as helpers from '../utils/helpers';

export enum ConversionTypes {
    VOLUME = 'VOLUME',
    TEMPERATURE = 'TEMPERATURE',
}

export enum ITypes {
    KELVIN = 'KELVIN',
    CELSIUS = 'CELSIUS',
    FAHRENHEIT = 'FAHRENHEIT',
    RANKINE = 'RANKINE',
}

export enum VTypes {
    LITRES = 'LITRES',
    TABLESPOONS = 'TABLESPOONS',
    CUBIC_INCHES = 'CUBIC_INCHES',
    CUPS = 'CUPS',
    CUBIC_FEETS = 'CUBIC_FEETS',
    GALLONS = 'GALLONS',
}

export const TemperatureTypes = [ITypes.CELSIUS, ITypes.FAHRENHEIT, ITypes.KELVIN, ITypes.RANKINE];
export const VolumeTypes = [VTypes.CUBIC_FEETS, VTypes.LITRES, VTypes.CUPS, VTypes.CUBIC_INCHES, VTypes.GALLONS, VTypes.TABLESPOONS];

export const data = [
    { id: 1, type: ConversionTypes.TEMPERATURE, item: ITypes.KELVIN },
    { id: 2, type: ConversionTypes.TEMPERATURE, item: ITypes.CELSIUS },
    { id: 3, type: ConversionTypes.TEMPERATURE, item: ITypes.RANKINE },
    { id: 4, type: ConversionTypes.TEMPERATURE, item: ITypes.FAHRENHEIT },
    { id: 5, type: ConversionTypes.VOLUME, item: VTypes.LITRES },
    { id: 6, type: ConversionTypes.VOLUME, item: VTypes.GALLONS },
    { id: 7, type: ConversionTypes.VOLUME, item: VTypes.CUPS },
    { id: 8, type: ConversionTypes.VOLUME, item: VTypes.TABLESPOONS },
    { id: 9, type: ConversionTypes.VOLUME, item: VTypes.CUBIC_INCHES },
    { id: 10, type: ConversionTypes.VOLUME, item: VTypes.CUBIC_FEETS },
];

export const temperatureConversionResult: Array<any> = [
    {
        x: ITypes.KELVIN,
        y: ITypes.CELSIUS,
        conversion: (value) => helpers.kelvin_with_celsius(value, true),
    },
    {
        x: ITypes.CELSIUS,
        y: ITypes.KELVIN,
        conversion: (value) => helpers.kelvin_with_celsius(value, false),
    },
    {
        x: ITypes.KELVIN,
        y: ITypes.FAHRENHEIT,
        conversion: (value) => helpers.kelvin_with_fahrenheit(value, true),
    },
    {
        x: ITypes.FAHRENHEIT,
        y: ITypes.KELVIN,
        conversion: (value) => helpers.kelvin_with_fahrenheit(value, false),
    },
    {
        x: ITypes.KELVIN,
        y: ITypes.RANKINE,
        conversion: (value) => helpers.kelvin_with_rankine(value, true),
    },
    {
        x: ITypes.RANKINE,
        y: ITypes.KELVIN,
        conversion: (value) => helpers.kelvin_with_rankine(value, false),
    },
    {
        x: ITypes.CELSIUS,
        y: ITypes.FAHRENHEIT,
        conversion: (value) => helpers.celsius_with_fahrenheit(value, true),
    },
    {
        x: ITypes.FAHRENHEIT,
        y: ITypes.CELSIUS,
        conversion: (value) => helpers.celsius_with_fahrenheit(value, false),
    },
    {
        x: ITypes.CELSIUS,
        y: ITypes.RANKINE,
        conversion: (value) => helpers.celsius_with_rankine(value, true),
    },
    {
        x: ITypes.RANKINE,
        y: ITypes.CELSIUS,
        conversion: (value) => helpers.celsius_with_rankine(value, false),
    },
    {
        x: ITypes.FAHRENHEIT,
        y: ITypes.RANKINE,
        conversion: (value) => helpers.fahrenheit_with_rankine(value, true),
    },
    {
        x: ITypes.RANKINE,
        y: ITypes.FAHRENHEIT,
        conversion: (value) => helpers.fahrenheit_with_rankine(value, false),
    },
];

export const volumeConversionResults: Array<any> = [
    {
        x: VTypes.LITRES,
        y: VTypes.TABLESPOONS,
        conversion: (value) => helpers.litres_with_tablespoons(value, true),
    },
    {
        x: VTypes.TABLESPOONS,
        y: VTypes.LITRES,
        conversion: (value) => helpers.litres_with_tablespoons(value, false),
    },
    {
        x: VTypes.LITRES,
        y: VTypes.CUBIC_INCHES,
        conversion: (value) => helpers.litres_with_cublicInches(value, true),
    },
    {
        x: VTypes.CUBIC_INCHES,
        y: VTypes.LITRES,
        conversion: (value) => helpers.litres_with_cublicInches(value, false),
    },
    {
        x: VTypes.LITRES,
        y: VTypes.CUBIC_FEETS,
        conversion: (value) => helpers.litres_with_cubicFeet(value, true),
    },
    {
        x: VTypes.CUBIC_FEETS,
        y: VTypes.LITRES,
        conversion: (value) => helpers.litres_with_cubicFeet(value, false),
    },
    {
        x: VTypes.LITRES,
        y: VTypes.CUPS,
        conversion: (value) => helpers.litres_with_cups(value, true),
    },
    {
        x: VTypes.CUPS,
        y: VTypes.LITRES,
        conversion: (value) => helpers.litres_with_cups(value, false),
    },
    {
        x: VTypes.LITRES,
        y: VTypes.GALLONS,
        conversion: (value) => helpers.litres_with_gallons(value, true),
    },
    {
        x: VTypes.GALLONS,
        y: VTypes.LITRES,
        conversion: (value) => helpers.litres_with_gallons(value, false),
    },
    {
        x: VTypes.CUBIC_INCHES,
        y: VTypes.TABLESPOONS,
        conversion: (value) => helpers.cubicInches_with_tablespoons(value, true),
    },
    {
        x: VTypes.TABLESPOONS,
        y: VTypes.CUBIC_INCHES,
        conversion: (value) => helpers.cubicInches_with_tablespoons(value, false),
    },
    {
        x: VTypes.CUBIC_INCHES,
        y: VTypes.CUBIC_FEETS,
        conversion: (value) => helpers.cubicInches_with_cubicFeet(value, true),
    },
    {
        x: VTypes.CUBIC_FEETS,
        y: VTypes.CUBIC_INCHES,
        conversion: (value) => helpers.cubicInches_with_cubicFeet(value, true),
    },
    {
        x: VTypes.CUBIC_INCHES,
        y: VTypes.CUPS,
        conversion: (value) => helpers.cubicInches_with_cups(value, true),
    },
    {
        x: VTypes.CUPS,
        y: VTypes.CUBIC_INCHES,
        conversion: (value) => helpers.cubicInches_with_cups(value, false),
    },
    {
        x: VTypes.CUBIC_INCHES,
        y: VTypes.GALLONS,
        conversion: (value) => helpers.cubicInches_with_gallons(value, true),
    },
    {
        x: VTypes.GALLONS,
        y: VTypes.CUBIC_INCHES,
        conversion: (value) => helpers.cubicInches_with_gallons(value, false),
    },
    {
        x: VTypes.CUBIC_FEETS,
        y: VTypes.TABLESPOONS,
        conversion: (value) => helpers.cubicFeet_with_tablespoons(value, true),
    },
    {
        x: VTypes.TABLESPOONS,
        y: VTypes.CUBIC_FEETS,
        conversion: (value) => helpers.cubicFeet_with_tablespoons(value, false),
    },
    {
        x: VTypes.CUBIC_FEETS,
        y: VTypes.CUPS,
        conversion: (value) => helpers.cubicFeet_with_cups(value, true),
    },
    {
        x: VTypes.CUPS,
        y: VTypes.CUBIC_FEETS,
        conversion: (value) => helpers.cubicFeet_with_cups(value, false),
    },
    {
        x: VTypes.CUBIC_FEETS,
        y: VTypes.GALLONS,
        conversion: (value) => helpers.cubicFeet_with_gallons(value, true),
    },
    {
        x: VTypes.GALLONS,
        y: VTypes.CUBIC_FEETS,
        conversion: (value) => helpers.cubicFeet_with_gallons(value, false),
    },
    {
        x: VTypes.CUPS,
        y: VTypes.TABLESPOONS,
        conversion: (value) => helpers.cups_with_tablespoons(value, true),
    },
    {
        x: VTypes.TABLESPOONS,
        y: VTypes.CUPS,
        conversion: (value) => helpers.cups_with_tablespoons(value, false),
    },
    {
        x: VTypes.CUPS,
        y: VTypes.GALLONS,
        conversion: (value) => helpers.cups_with_gallons(value, true),
    },
    {
        x: VTypes.GALLONS,
        y: VTypes.CUPS,
        conversion: (value) => helpers.cups_with_gallons(value, false),
    },
    {
        x: VTypes.TABLESPOONS,
        y: VTypes.GALLONS,
        conversion: (value) => helpers.tablespoons_with_gallons(value, true),
    },
    {
        x: VTypes.GALLONS,
        y: VTypes.TABLESPOONS,
        conversion: (value) => helpers.tablespoons_with_gallons(value, false),
    },
];
