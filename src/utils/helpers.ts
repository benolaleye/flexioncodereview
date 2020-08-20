import { ConversionTypes, TemperatureTypes, VolumeTypes } from '../constants/ConversionTypes';

export const to_one_decimal_place = (value: number, place: number = 1) => {
    let multiplier = Math.pow(10, place || 0);
    return (Math.round(value * multiplier) / multiplier).toFixed(1);
};

export const round_one_decimal_place = (value: string) => Math.round(10 * parseFloat(value)) / 10;

export const convertion_type_validator = (head, tail) => {
    if (TemperatureTypes.includes(head)) {
        return {
            type: ConversionTypes.TEMPERATURE,
            conclude: TemperatureTypes.includes(tail),
        };
    } else if (TemperatureTypes.includes(tail)) {
        return {
            type: ConversionTypes.TEMPERATURE,
            conclude: TemperatureTypes.includes(head),
        };
    } else if (VolumeTypes.includes(head)) {
        return {
            type: ConversionTypes.VOLUME,
            conclude: VolumeTypes.includes(tail),
        };
    } else if (VolumeTypes.includes(tail)) {
        return {
            type: ConversionTypes.VOLUME,
            conclude: VolumeTypes.includes(head),
        };
    } else {
        return { type: null, conclude: false };
    }
};

/**
 * Temperature Conversion functions
 * */
export const kelvin_with_celsius = (temp_value: number, flag: boolean) => {
    return flag ? to_one_decimal_place(-273.15 + temp_value) : to_one_decimal_place(273.15 + temp_value);
};

export const kelvin_with_fahrenheit = (temp_value: number, flag: boolean) => {
    return flag ? to_one_decimal_place(((temp_value - 273.15) * 9) / 5 + 32) : to_one_decimal_place(((temp_value - 32) * 5) / 9 + 273.15);
};

export const kelvin_with_rankine = (temp_value: number, flag: boolean) => {
    return flag ? to_one_decimal_place(temp_value * 1.8) : to_one_decimal_place(temp_value / 1.8);
};

export const fahrenheit_with_rankine = (temp_value: number, flag: boolean) => {
    return flag ? to_one_decimal_place(temp_value + 459.67) : to_one_decimal_place(temp_value - 459.67);
};

export const celsius_with_rankine = (temp_value: number, flag: boolean) => {
    return flag ? to_one_decimal_place((temp_value * 9) / 5 + 491.67) : to_one_decimal_place(((temp_value - 491.67) * 5) / 9);
};

export const celsius_with_fahrenheit = (temp_value: number, flag: boolean) => {
    return flag ? to_one_decimal_place((temp_value * 9) / 5 + 32) : to_one_decimal_place(((temp_value - 32) * 5) / 9);
};

/**
 * Volumn Conversion functions
 * */

export const litres_with_tablespoons = (volume_value: number, flag: boolean) => {
    return flag ? to_one_decimal_place(volume_value * 67.628) : to_one_decimal_place(volume_value / 67.628);
};

export const litres_with_cublicInches = (volume_value: number, flag: boolean) => {
    return flag ? to_one_decimal_place(volume_value * 61.024) : to_one_decimal_place(volume_value / 61.024);
};

export const litres_with_cubicFeet = (volume_value: number, flag: boolean) => {
    return flag ? to_one_decimal_place(volume_value / 28.317) : to_one_decimal_place(volume_value * 28.317);
};

export const litres_with_cups = (volume_value: number, flag: boolean) => {
    return flag ? to_one_decimal_place(volume_value * 4.167) : to_one_decimal_place(volume_value / 4.167);
};

export const litres_with_gallons = (volume_value: number, flag: boolean) => {
    return flag ? to_one_decimal_place(volume_value / 3.785) : to_one_decimal_place(volume_value * 3.785);
};

export const cubicInches_with_tablespoons = (volume_value: number, flag: boolean) => {
    return flag ? to_one_decimal_place(volume_value * 1.108) : to_one_decimal_place(volume_value / 1.108);
};

export const cubicInches_with_cubicFeet = (volume_value: number, flag: boolean) => {
    return flag ? to_one_decimal_place(volume_value / 1728) : to_one_decimal_place(volume_value * 1728);
};

export const cubicInches_with_cups = (volume_value: number, flag: boolean) => {
    return flag ? to_one_decimal_place(volume_value / 14.646) : to_one_decimal_place(volume_value * 14.646);
};

export const cubicInches_with_gallons = (volume_value: number, flag: boolean) => {
    return flag ? to_one_decimal_place(volume_value / 231) : to_one_decimal_place(volume_value * 231);
};

export const cubicFeet_with_tablespoons = (volume_value: number, flag: boolean) => {
    return flag ? to_one_decimal_place(volume_value * 1915.013) : volume_value / 1915.013;
};

export const cubicFeet_with_cups = (volume_value: number, flag: boolean) => {
    return flag ? to_one_decimal_place(volume_value * 117.987) : to_one_decimal_place(volume_value / 117.987);
};

export const cubicFeet_with_gallons = (volume_value: number, flag: boolean) => {
    return flag ? to_one_decimal_place(volume_value * 7.481) : to_one_decimal_place(volume_value / 7.481);
};

export const cups_with_tablespoons = (volume_value: number, flag: boolean) => {
    return flag ? to_one_decimal_place(volume_value * 16.231) : to_one_decimal_place(volume_value / 16.231);
};

export const cups_with_gallons = (volume_value: number, flag: boolean) => {
    return flag ? to_one_decimal_place(volume_value / 15.773) : to_one_decimal_place(volume_value * 15.773);
};

export const tablespoons_with_gallons = (volume_value: number, flag: boolean) => {
    return flag ? to_one_decimal_place(volume_value / 256) : to_one_decimal_place(volume_value * 256);
};
