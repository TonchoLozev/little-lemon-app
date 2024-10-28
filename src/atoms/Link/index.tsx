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
            <a
                className={`link highlight-font p-green-font ${className}`}
                href={link}
            >
                {name}
            </a>
            <hr className="p-green-font" />
        </>
    );
};

export default Link;
