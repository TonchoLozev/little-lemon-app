import React from 'react';

import { DoormatNavigation } from '../../molecules/index.ts';

import Constants from '../../constants.ts';

import RestaurantImg from '../../assets/other/restaurant.jpg';

import './index.css';

const Footer = () => {
    return (
        <footer className="background-light-gray">
            <img src={RestaurantImg} width={170} height={270} />
            <DoormatNavigation
                title="Doormat Navigation"
                links={Constants.LINKS.NAVIGATION}
            />
            <DoormatNavigation
                title="Contact"
                links={Constants.LINKS.CONTACT}
            />
            <DoormatNavigation
                title="Social Media Links"
                links={Constants.LINKS.SOCIAL_MEDIA}
            />
        </footer>
    );
};

export default Footer;
