import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, SectionBackground } from '../../atoms/index.ts';

import RestauranfoodImf from '../../assets/other/restauranfood.jpg';

import './index.css';

const HeroSection = () => {
    const navigate = useNavigate();

    const handleReserve = () => {
        navigate('/booking');
    };
    return (
        <section className="hero-section grid-layout">
            <SectionBackground color="green" />
            <div className="hero-section-description">
                <h1 className="text-yellow">Little Lemon</h1>
                <h2 className="text-white">Chicago</h2>
                <h3 className="text-white">
                    We are a family owned Mediterranean restaurant, focused on
                    traditional recipes served with a modern twist.
                </h3>
                <Button onClick={handleReserve}>Reserve Table</Button>
            </div>
            <img src={RestauranfoodImf} width={339} height={417} />
        </section>
    );
};

export default HeroSection;
