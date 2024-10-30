import React from 'react';

import DoormatNavigation from '../../molecules/DoormatNavigation/index.tsx';

import Constants from '../../constants.ts';

import Restaurant from '../../assets/other/restaurant.jpg';

import './index.css';

const Footer = () => {
    return (
        <footer className="background-light-gray">
            <img
                src={Restaurant}
                width={170}
                height={270}
                className="footer-image"
            />
            <DoormatNavigation
                className="doormat-footer"
                title="Doormat Navigation"
                links={Constants.LINKS.NAVIGATION}
            />
            <DoormatNavigation
                className="doormat-footer"
                title="Contact"
                links={Constants.LINKS.CONTACT}
            />
            <DoormatNavigation
                className="doormat-footer"
                title="Social Media Links"
                links={Constants.LINKS.SOCIAL_MEDIA}
            />
        </footer>
    );
};

export default Footer;
