import React, { useState } from 'react';

import Constants from '../../constants.ts';

import iconHamburgerMenu from '../../assets/icons/icon_hamburger_menu.svg';

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
                    src={iconHamburgerMenu}
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
                                    <a href={link}>{name}</a>
                                </li>
                            ),
                        )}
                </ul>
            </div>
        </>
    );
};

export default NavMobile;
