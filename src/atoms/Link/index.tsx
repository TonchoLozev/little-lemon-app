import React from 'react';

import './index.css';

type LinksProps = {
    className?: string;
    name: string;
    link: string;
};
const Link = ({ className, name, link }: LinksProps) => {
    return (
        <>
            <a className={`link text-green  ${className}`} href={link}>
                <span>{name}</span>
            </a>
            <hr className="text-green " />
        </>
    );
};

export default Link;
