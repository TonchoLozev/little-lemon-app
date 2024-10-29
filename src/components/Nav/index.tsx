import React from 'react';

import NavDesktop from './desktop.tsx';
import NavMobile from './mobile.tsx';

const Nav = () => {
    return (
        <nav>
            <NavDesktop />
            <NavMobile />
        </nav>
    );
};

export default Nav;
