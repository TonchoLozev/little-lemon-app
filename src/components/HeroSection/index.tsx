import React from 'react';

import Button from '../../atoms/Button/index.tsx';

import './index.css';

const HeroSection = () => {
    const handleReserve = () => {
        return true;
    };
    return (
        <section className="hero-section grid-layout">
            <div className="hero-section-background background-green" />
            <div className="hero-section-description">
                <h1 className="text-yellow">Little Lemon</h1>
                <h2 className="text-white">Chicago</h2>
                <h3 className="text-white">
                    We are a family owned Mediterranean restaurant, focused on
                    traditional recipes served with a modern twist.
                </h3>
                <Button onClick={handleReserve}>Reserve Table</Button>
            </div>
            <img
                src="./assets/other/restauranfood.jpg"
                width={339}
                height={417}
                className="hero-section-image"
            />
        </section>
    );
};

export default HeroSection;
