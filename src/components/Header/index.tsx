import React from 'react';

import Logo from '../../atoms/Logo/index.tsx';
import Nav from '../Nav/index.tsx';

import './index.css';

const Header = () => {
    return (
        <header className="grid-layout">
            <div className="header-grid">
                <Logo />
                <Nav />
            </div>
        </header>
    );
};

export default Header;
