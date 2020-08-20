import { ConversionTypes, temperatureConversionResult, volumeConversionResults } from '../constants/ConversionTypes';

export class AppService {
    public static convert(head: string, tail: string, type: ConversionTypes, input_value: number, student_input: number) {
        const result = type === ConversionTypes.TEMPERATURE ? temperatureConversionResult : volumeConversionResults;
        return result.reduce((accu, child) => {
            if (head === child.x && tail === child.y) {
                accu.correct = parseFloat(Number(child.conversion(input_value)).toFixed(1));
                accu.message = accu.correct === student_input ? 'correct' : 'incorrect';
            }

            return accu;
        }, {});
    }
}
