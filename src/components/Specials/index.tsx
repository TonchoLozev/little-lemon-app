import React from 'react';

import Button from '../../atoms/Button/index.tsx';
import Card from '../../molecules/Card/index.tsx';

import Constants from '../../constants.ts';

import './index.css';

const Specials = () => {
    const handleOnlineMenu = () => {
        return true;
    };
    return (
        <section className="specials-section grid-layout">
            <div className="specials-title">
                <h1>This week specials!</h1>
                <Button onClick={handleOnlineMenu}>Online Menu</Button>
            </div>
            <div className="specials-details">
                {Constants.SPECIALS.map((special, index) => (
                    <Card key={index} {...special} />
                ))}
            </div>
        </section>
    );
};

export default Specials;
