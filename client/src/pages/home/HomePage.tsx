import React from 'react';
import { Formik } from 'formik';
import { HomePageStyle } from './HomePageStyle';
import { CustomInput } from '../../components/CustomInput';
import { CustomSelect } from '../../components/CustomSelect';
import { CustomButton } from '../../components/CustomButton';
import { converterSchema } from '../../utils/helpers';

const URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8000';

export const HomePage = () => {
    const [loading, setLoading] = React.useState(false);
    const [result, setResult] = React.useState('');
    const [error, setError] = React.useState('');
    const [types, setTypes] = React.useState([]);

    const postData = (payload: any) => {
        fetch(`${URL}/api/convert`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then((res) => res.json())
            .then((data) => {
                setResult(data.message);
            })
            .catch((e) => {
                setError('Network connectivity issues');
            });
    };

    const fetchData = () => {
        fetch(`${URL}/api/types`)
            .then((res) => res.json())
            .then((data) => setTypes((types) => types.concat(data)));
    };

    const handleFieldChange = React.useCallback(async (values) => {
        try {
            setLoading(true);
            setResult('');
            const { input_value, student_response, head, tail } = values;
            const headValue = head.split(',');
            const tailValue = tail.split(',');

            if (headValue[1] !== tailValue[1]) {
                setLoading(false);
                return setResult('invalid');
            }

            const payload = { head: headValue[0], tail: tailValue[0], answer: student_response, input_value };
            postData(payload);
            setLoading(false);
        } catch (error) {
            setError('Something went wrong');
            setLoading(false);
        }
    }, []);

    const slugify_string = (text: string) => {
        const result = text
            .toLowerCase()
            .replace(/_/g, '-')
            .replace(/[^\w-]+/g, '');

        return `${result[0].toUpperCase()}${result.slice(1)}`;
    };

    React.useEffect(() => {
        fetchData();
    }, []);

    return (
        <HomePageStyle>
            <div className="inner">
                <div className="form__wrapper">
                    <h1>
                        <span>Unit</span>
                        <small style={{ color: '#DC7633' }}>Converter</small>
                    </h1>
                    <div className="horizontal__line"></div>
                    <div className="content__wrapper">
                        <Formik
                            initialValues={{ input_value: '', student_response: '', head: '', tail: '' }}
                            onSubmit={handleFieldChange}
                            validationSchema={converterSchema}
                        >
                            {({ handleSubmit }) => (
                                <form onSubmit={handleSubmit}>
                                    <CustomInput type="text" placeholder="Ex. 84.2" name="input_value" label="Input Value" />
                                    <CustomSelect name="head" label="From Measurement (Unit)">
                                        <option value="" disabled>
                                            Select Input Unit of Measure
                                        </option>
                                        {types.map(({ id, item, type }) => (
                                            <option key={id} value={[item, type]}>
                                                {slugify_string(item)}
                                            </option>
                                        ))}
                                    </CustomSelect>
                                    <CustomSelect name="tail" label="To Measurement (Unit)">
                                        <option value="" disabled>
                                            Select Target Unit of Measure
                                        </option>
                                        {types.map(({ id, item, type }) => (
                                            <option key={id} value={[item, type]}>
                                                {slugify_string(item)}
                                            </option>
                                        ))}
                                    </CustomSelect>
                                    <CustomInput type="text" placeholder="Ex. 543.94" name="student_response" label="Student Response" />
                                    <CustomButton type="submit" disabled={loading}>
                                        {loading ? 'Computing...' : 'Submit'}
                                    </CustomButton>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
                <div className="result__wrapper">
                    {error !== '' && <code>{error}</code>}
                    {loading && <img src={require('../../assets/images/loader.gif')} alt="loader" />}
                    {!loading && result !== '' && (
                        <span className={`result ${result === 'incorrect' || result === 'invalid' ? 'invalid' : 'valid'}`}>{result}</span>
                    )}
                </div>
            </div>
        </HomePageStyle>
    );
};
