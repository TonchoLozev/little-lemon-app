import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Constants from '../../constants.ts';

import IconGamburgerMenuImg from '../../assets/icons/icon_hamburger_menu.svg';

import './mobile.css';

const NavMobile = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const handleClick = () => {
        setIsMenuOpened((prevState) => !prevState);
    };

    return (
        <>
            <div className="nav-mob">
                <img
                    src={IconGamburgerMenuImg}
                    height={20}
                    width={20}
                    className={`icon-hamburger-menu ${isMenuOpened ? 'icon-hamburger-menu--opened' : ''}`}
                    alt="Hamburger Menu"
                    onClick={handleClick}
                />
                <ul
                    className={`nav-list-mob ${isMenuOpened ? 'nav-list-mob--opened' : ''}`}
                >
                    {isMenuOpened &&
                        Constants.LINKS.NAVIGATION.map(
                            ({ name, link }, index) => (
                                <li key={index}>
                                    <Link to={link}>{name}</Link>
                                    {/* <a href={link}>{name}</a> */}
                                </li>
                            ),
                        )}
                </ul>
            </div>
        </>
    );
};

export default NavMobile;
