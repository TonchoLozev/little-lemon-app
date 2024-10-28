import React from 'react';

import Constants from '../../constants.ts';

import './desktop.css';

const NavDesktop = () => {
    return (
        <ul className="nav-list-desk nav-font">
            {Constants.LINKS.NAVIGATION.map(({ name, link }, index) => (
                <li key={index}>
                    <a href={link}>{name}</a>
                </li>
            ))}
        </ul>
    );
};

export default NavDesktop;
