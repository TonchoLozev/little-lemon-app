import React from 'react';

import Link from '../../atoms/Link/index.tsx';

import './index.css'

type DoormatNavigationProps = {
    className?: string;
    title: string,
    links: {name:string, link: string}[]
}

const DoormatNavigation = ({className, title, links}: DoormatNavigationProps) => {
    return (
        <div className={`doormat-navigation ${className}`}>
            <h5 className='doormat-title card-title-font p-green-font'>{title}</h5>
            <ul>
                {links.map(({name, link}) => <li className="doormat-link"><Link name={name} link={link}/></li>)}
            </ul>
        </div>
    )
}

export default DoormatNavigation;