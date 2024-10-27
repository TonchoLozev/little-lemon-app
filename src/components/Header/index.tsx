import React from 'react';

import Logo from '../../atoms/Logo/index.tsx';
import Nav from '../Nav/index.tsx';

import './index.css';

const Header = () => {
    return (
        <header>
            <Logo width={150} className='header-logo'/>
            <Nav/>
        </header>
    )
}

export default Header;