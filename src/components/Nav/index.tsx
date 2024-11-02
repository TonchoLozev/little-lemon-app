import React from 'react';
import { Link, ScrollRestoration } from 'react-router-dom';

import NavDesktop from './desktop.tsx';
import NavMobile from './mobile.tsx';

import Constants from '../../constants.ts';

const NavLinks = () => {
    return Constants.LINKS.NAVIGATION.map(({ name, link }, index) => (
        <li key={index}>
            <Link to={link}>{name}</Link>
        </li>
    ));
};

const Nav = () => {
    return (
        <nav>
            <ScrollRestoration />
            <NavDesktop>
                <NavLinks />
            </NavDesktop>
            <NavMobile>
                <NavLinks />
            </NavMobile>
        </nav>
    );
};

export default Nav;
