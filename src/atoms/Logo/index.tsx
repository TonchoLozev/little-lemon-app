import React from 'react';

import './index.css';

type LogoProps = {
    height?: number;
    width?: number;
};

const Logo = ({ height = 50, width = 50 }: LogoProps) => {
    return (
        <img
            src="./assets/logos/logo.svg"
            height={height}
            width={width}
            className="logo"
            alt="Little Lemon Logo"
        />
    );
};

export default Logo;
