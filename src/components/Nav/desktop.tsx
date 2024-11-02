import React from 'react';
import { Link } from 'react-router-dom';

import Constants from '../../constants.ts';

import './desktop.css';

const NavDesktop = () => {
    return (
        <ul className="nav-list-desk">
            {Constants.LINKS.NAVIGATION.map(({ name, link }, index) => (
                <li key={index}>
                    <Link to={link}>{name}</Link>
                    {/* <a href={link}>{name}</a> */}
                </li>
            ))}
        </ul>
    );
};

export default NavDesktop;
