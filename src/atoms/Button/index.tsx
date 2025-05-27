import React, { useMemo } from 'react';

import './index.css';

type ButtonProps = {
    color?: 'primary' | 'secondary';
    onClick: () => void;
    children: string;
    isDisabled?: boolean;
    testID?: string;
};

const Button = ({
    color = 'primary',
    onClick,
    children,
    isDisabled,
    testID,
}: ButtonProps) => {
    const colorlass = useMemo(() => {
        if (color === 'primary') {
            return 'btn-primary';
        }
        ``;
        if (color === 'secondary') {
            return 'btn-secondary';
        }
    }, [color]);

    const handleOnClick = (event) => {
        event.preventDefault();

        onClick();
    };
    return (
        <button
            className={`btn ${colorlass}${isDisabled ? ' disabled' : ''}`}
            onClick={isDisabled ? undefined : handleOnClick}
            aria-label="On Click"
            data-testid={testID}
        >
            <h6>{children}</h6>
        </button>
    );
};

export default Button;
