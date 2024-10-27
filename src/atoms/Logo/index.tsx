import React from 'react';

import logo from '../../assets/logos/logo.svg';

import './index.css'

type LogoProps = {
    height?: number,
    width?: number,
    className?: string,
}

const Logo = ({height = 50, width = 50, className = 'logo'}: LogoProps) => {
    return (
        <img src={logo} height={height} width={width} className={className} alt="Little Lemon Logo"/>
    )
}

export default Logo;