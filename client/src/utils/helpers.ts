import * as yup from 'yup';

export const converterSchema = yup.object({
    input_value: yup
        .string()
        .label('Input value')
        .required('Value is required')
        .matches(/^(([0-9]+)?\.?([0-9]+)?)$/, 'Only numbers are allowed'),
    student_response: yup
        .string()
        .label('Student Response')
        .required('Student Response is required')
        .matches(/^(([0-9]+)?\.?([0-9]+)?)$/, 'Only numbers are allowed'),
    head: yup.string().label('Conversion Source').required('Conversion source is required'),
    tail: yup.string().label('Conversion Target').required('Conversion target is required'),
});
