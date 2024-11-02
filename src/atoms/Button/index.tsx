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
            return 'btn-primary';
        }
        if (type === 'secondary') {
            return 'btn-secondary';
        }
    }, [type]);

    const handleOnClick = (event) => {
        event.preventDefault();

        onClick();
    };
    return (
        <button className={`btn ${typeClass}`} onClick={handleOnClick}>
            <h6>{children}</h6>
        </button>
    );
};

export default Button;
