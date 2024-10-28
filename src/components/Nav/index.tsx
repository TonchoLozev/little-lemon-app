import React from 'react';

import Constants from '../../constants.ts';

import './index.css';

const Nav = () => {
    return (
        <ul className="nav-list nav-font">
            {Constants.LINKS.NAVIGATION.map(({ name, link }, index) => (
                <li key={index}>
                    <a href={link}>{name}</a>
                </li>
            ))}
        </ul>
    );
};

export default Nav;
