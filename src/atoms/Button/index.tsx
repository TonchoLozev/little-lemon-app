import React, { useMemo } from 'react';

import './index.css';

type ButtonProps = {
    color?: 'primary' | 'secondary';
    onClick: () => void;
    children: string;
};

const Button = ({ color = 'primary', onClick, children }: ButtonProps) => {
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
        <button className={`btn ${colorlass}`} onClick={handleOnClick}>
            <h6>{children}</h6>
        </button>
    );
};

export default Button;
