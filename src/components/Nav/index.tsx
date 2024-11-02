import React from 'react';
import { ScrollRestoration } from 'react-router-dom';

import NavDesktop from './desktop.tsx';
import NavMobile from './mobile.tsx';

const Nav = () => {
    return (
        <nav>
            <ScrollRestoration />
            <NavDesktop />
            <NavMobile />
        </nav>
    );
};

export default Nav;
