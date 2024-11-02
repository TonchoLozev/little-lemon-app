import React, { ReactElement, useState } from 'react';

import IconGamburgerMenuImg from '../../assets/icons/icon_hamburger_menu.svg';

import './mobile.css';

type NavMobileProps = {
    children: ReactElement;
};

const NavMobile = ({ children }: NavMobileProps) => {
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
                    {isMenuOpened && children}
                </ul>
            </div>
        </>
    );
};

export default NavMobile;
