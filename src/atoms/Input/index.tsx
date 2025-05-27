import React, { ChangeEvent, useMemo, useState } from 'react';

import './index.css';

type InputProps = {
    color?: 'primary' | 'secondary';
    id: string;
    name: string;
    type: string;
    label: string;
    value: string | number;
    onChange: (e: ChangeEvent) => void;
    onBlur: (e: ChangeEvent) => void;
    error: string | false | undefined;
    isRequired?: boolean;
    testID?: string;
};

const Input = ({
    color = 'primary',
    id,
    name,
    type,
    label,
    value,
    onChange,
    onBlur,
    error,
    isRequired,
}: InputProps) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const colorClass = useMemo(() => {
        if (color === 'primary') {
            return 'input-primary';
        }
        if (color === 'secondary') {
            return 'input-secondary';
        }
    }, [color]);

    return (
        <div
            className={`input ${colorClass}`}
            role="input-field"
            data-testid={id}
            aria-label="On Input"
        >
            <label htmlFor={id}>
                <h3>
                    {label} {isRequired && <span className="text-red">*</span>}
                </h3>
            </label>
            <input
                id={id}
                name={name}
                type={type}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                className={`${error ? 'error' : ''} ${isFocused ? 'focused' : ''}`}
                onFocus={() => setIsFocused(true)}
                onBlurCapture={() => setIsFocused(false)}
            />
            {error && (
                <span className="text-red" aria-label="Error">
                    {error}
                </span>
            )}
        </div>
    );
};

export default Input;
