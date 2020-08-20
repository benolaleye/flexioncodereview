import React from 'react';
import styled from 'styled-components';
import { useFieldHooks } from './InputHook';
import { CustomInputContainer, CustomLabel } from './CustomInput';

const CustomSelectStyle = styled.select``;

interface FormTextInputProps {
    className?: string;
    name: string;
    label?: string;
    inputProps?: React.ComponentPropsWithoutRef<'select'>;
}

export const CustomSelect: React.FC<FormTextInputProps> = ({ name, children, label, inputProps, ...props }) => {
    const { validState, validationClass, validationProps, field, meta, focusClass } = useFieldHooks(name);

    return (
        <CustomInputContainer {...props}>
            <CustomLabel>{label}</CustomLabel>
            <div className={`form-text__body` + validationClass + focusClass} id={name}>
                <CustomSelectStyle className="form-text__input" children={children} {...inputProps} {...field} {...validationProps} />
            </div>
            {validState === false ? (
                <React.Fragment>
                    <span className="form-text__validation-text">{meta.error}</span>
                </React.Fragment>
            ) : null}
        </CustomInputContainer>
    );
};
