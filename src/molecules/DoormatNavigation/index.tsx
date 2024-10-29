import React from 'react';

import Link from '../../atoms/Link/index.tsx';

import './index.css';

type DoormatNavigationProps = {
    className?: string;
    title: string;
    links: { name: string; link: string }[];
};

const DoormatNavigation = ({
    className,
    title,
    links,
}: DoormatNavigationProps) => {
    return (
        <div className={`doormat-navigation ${className}`}>
            <h6 className="doormat-title text-green">{title}</h6>
            <ul>
                {links.map(({ name, link }, index) => (
                    <li key={index} className="doormat-link">
                        <Link name={name} link={link} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DoormatNavigation;
