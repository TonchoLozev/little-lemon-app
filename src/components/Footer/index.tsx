import React from 'react';

import DoormatNavigation from '../../molecules/DoormatNavigation/index.tsx';

import Constants from '../../constants.ts';

import Restaurant from '../../assets/other/restaurant.jpg';

import './index.css';

const Footer = () => {
    return (
        <footer>
            <img
                src={Restaurant}
                width={170}
                height={270}
                className="footer-image"
            />
            <div className="footer-doormat">
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
            </div>
        </footer>
    );
};

export default Footer;
