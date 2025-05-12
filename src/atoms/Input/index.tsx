import React, { ChangeEvent, useMemo } from 'react';

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
    testID = 'input',
}: InputProps) => {
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
            data-testid={testID}
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
            />
            {error && <span className="text-red">{error}</span>}
        </div>
    );
};

export default Input;
