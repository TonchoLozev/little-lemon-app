import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

type FooterLinkProps = {
    className?: string;
    name: string;
    link: string;
};

const FooterLink = ({ className, name, link }: FooterLinkProps) => {
    return (
        <>
            <Link
                className={`link text-green  ${className}`}
                to={link}
                preventScrollReset={false}
            >
                <span>{name}</span>
            </Link>
            <hr className="text-green " />
        </>
    );
};

export default FooterLink;
