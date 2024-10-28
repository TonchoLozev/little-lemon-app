import React from 'react';

import Logo from '../../atoms/Logo/index.tsx';
import Nav from '../Nav/index.tsx';

import './index.css';

const Header = () => {
    return (
        <header>
            <Logo className="header-logo" />
            <Nav />
        </header>
    );
};

export default Header;
