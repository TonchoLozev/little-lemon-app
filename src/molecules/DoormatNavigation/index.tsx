import React from 'react';

import { FooterLink } from '../../atoms/index.ts';

import './index.css';

type DoormatNavigationProps = {
    title: string;
    links: { name: string; link: string }[];
};

const DoormatNavigation = ({ title, links }: DoormatNavigationProps) => {
    return (
        <div className="doormat-navigation">
            <h6 className="text-green">{title}</h6>
            <ul>
                {links.map(({ name, link }, index) => (
                    <li key={index}>
                        <FooterLink name={name} link={link} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DoormatNavigation;
