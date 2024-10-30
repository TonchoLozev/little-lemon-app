import React, { useMemo } from 'react';

import './index.css';

type ButtonProps = {
    type?: 'primary' | 'secondary';
    onClick: () => void;
    children: string;
};
const Button = ({ type = 'primary', onClick, children }: ButtonProps) => {
    const typeClass = useMemo(() => {
        if (type === 'primary') {
            return 'button-primary';
        }
        if (type === 'secondary') {
            return 'button-secondary';
        }
    }, [type]);

    const handleOnClick = (event) => {
        event.preventDefault();

        onClick();
    };
    return (
        <button className={`button ${typeClass}`} onClick={handleOnClick}>
            <h6>{children}</h6>
        </button>
    );
};

export default Button;
