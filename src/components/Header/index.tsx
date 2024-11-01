import React from 'react';

import Nav from '../Nav/index.tsx';

import { Logo } from '../../atoms/index.ts';

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
