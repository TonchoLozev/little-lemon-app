import React, { useState } from 'react';

import Constants from '../../constants.ts';

import iconHamburgerMenu from '../../assets/icons/icon_hamburger_menu.svg';

import './mobile.css';

const NavMobile = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const [isListShown, setIsListShown] = useState(false);

    const handleClick = () => {
        setIsMenuOpened((prevState) => !prevState);
        if (isListShown) {
            setIsListShown((prevState) => !prevState);
        } else {
            setTimeout(() => setIsListShown((prevState) => !prevState), 300);
        }
    };

    return (
        <>
            <div className="nav-mob">
                <img
                    src={iconHamburgerMenu}
                    height={20}
                    width={20}
                    className="icon-gamburger-menu"
                    alt="Hamburger Menu"
                    onClick={handleClick}
                />
            </div>
            <ul
                className={`nav-list-mob ${isMenuOpened ? 'nav-list-mob--opened' : ''} nav-font`}
            >
                {isListShown &&
                    Constants.LINKS.NAVIGATION.map(({ name, link }, index) => (
                        <li key={index}>
                            <a href={link}>{name}</a>
                        </li>
                    ))}
            </ul>
        </>
    );
};

export default NavMobile;
