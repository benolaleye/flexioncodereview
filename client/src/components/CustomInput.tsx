import React from 'react';
import styled from 'styled-components';
import { useFieldHooks } from './InputHook';

export const CustomInputContainer = styled.div`
    color: black;
    width: 100%;
    margin-bottom: 20px;

    .form-text__body {
        background: white;
        padding: 5px;
        border: 1px solid #dadada;
        border-radius: 0.5rem;
        padding: 10px;
        display: flex;
        align-items: center;
        position: relative;
        font-size: 1rem;
        line-height: 1;
        transition: all 0.25s ease;

        :hover {
            border-color: #abebc6;
        }
    }

    .form-text__input {
        appearance: none;
        padding: 0;
        margin: 0;
        border: none;
        font-family: inherit;
        flex: 1;
        outline: none;
        height: 24px;
    }

    .form-text__body.invalid {
        border-color: #e03225;
    }

    .form-text__validation-text {
        font-size: 13px;
        padding: 5px 0;
        color: red;
        width: 100%;
        display: block;
    }
`;

export const CustomInputStyle = styled.input`
    background: white;
`;

export const CustomLabel = styled.label`
    display: flex;
    font-size: 14px;
    margin-bottom: 5px;
`;

interface FormTextInputProps {
    className?: string;
    name: string;
    placeholder?: string;
    label?: string;
    type?: 'number' | 'text';
    disabled?: boolean;
    inputProps?: React.ComponentPropsWithoutRef<'input'>;
}

export const CustomInput: React.FC<FormTextInputProps> = ({ placeholder, name, type, children, label, disabled, inputProps, ...props }) => {
    const { ref, validState, validationClass, validationProps, field, meta, focusClass } = useFieldHooks(name);

    return (
        <CustomInputContainer {...props}>
            <CustomLabel>{label}</CustomLabel>
            <div className={`form-text__body` + validationClass + focusClass} id={name}>
                <CustomInputStyle
                    className="form-text__input"
                    placeholder={placeholder}
                    type={type}
                    children={children}
                    disabled={disabled}
                    ref={ref}
                    {...inputProps}
                    {...field}
                    {...validationProps}
                />
            </div>
            {validState === false ? (
                <React.Fragment>
                    <span className="form-text__validation-text">{meta.error}</span>
                </React.Fragment>
            ) : null}
        </CustomInputContainer>
    );
};
