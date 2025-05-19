import React from 'react';
import { useNavigate } from 'react-router-dom';

import { CardSpecial } from '../../molecules/index.ts';

import { Button } from '../../atoms/index.ts';

import Constants from '../../constants.ts';

import './index.css';

const Specials = () => {
    const navigate = useNavigate();

    const handleOnlineMenu = () => {
        navigate('/menu');
    };

    return (
        <section id="specials" className="specials-section grid-layout">
            <div className="specials-title">
                <h1>This week specials!</h1>
                <Button onClick={handleOnlineMenu}>Online Menu</Button>
            </div>
            <div className="specials-details">
                {Constants.SPECIALS.map((special, index) => (
                    <CardSpecial key={index} {...special} />
                ))}
            </div>
        </section>
    );
};

export default Specials;
