import { useField } from 'formik';
import React from 'react';

export const useFieldHooks = (name: string) => {
    const [field, meta] = useField({ name });
    const validState = meta.touched ? (meta.error ? false : true) : null;
    const validationClass = validState === null ? '' : validState ? ' valid' : ' invalid';
    const validationProps = { [validationClass]: true };

    const ref = React.useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = React.useState(false);
    const focusClass = React.useMemo(() => (isFocused ? ' focus' : ''), [isFocused]);

    React.useEffect(() => {
        if (ref.current) {
            ref.current.onfocus = () => {
                setIsFocused(true);
            };

            ref.current.onblur = () => {
                setIsFocused(false);
            };
        }
    }, [ref]);

    return {
        field,
        focusClass,
        validationProps,
        meta,
        ref,
        validState,
        validationClass,
    };
};
