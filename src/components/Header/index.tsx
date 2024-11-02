import React from 'react';
import { Link } from 'react-router-dom';

import Nav from '../Nav/index.tsx';

import { Logo } from '../../atoms/index.ts';

import './index.css';

const Header = () => {
    return (
        <header className="grid-layout">
            <div className="header-grid">
                <Link to="/">
                    <Logo />
                </Link>
                <Nav />
            </div>
        </header>
    );
};

export default Header;
