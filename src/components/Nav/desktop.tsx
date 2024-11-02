import React, { ReactElement } from 'react';

import './desktop.css';

type NavDesktopProps = {
    children: ReactElement;
};

const NavDesktop = ({ children }: NavDesktopProps) => {
    return <ul className="nav-list-desk">{children}</ul>;
};

export default NavDesktop;
