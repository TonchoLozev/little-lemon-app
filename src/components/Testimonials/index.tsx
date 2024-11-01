import React from 'react';

import { CardProfile } from '../../molecules/index.ts';

import { SectionBackground } from '../../atoms/index.ts';

import Constants from '../../constants.ts';

import './index.css';

const Testimonials = () => {
    return (
        <section className="testimonials-section grid-layout">
            <SectionBackground color="green" />
            <div className="testimonials-container">
                <h1 className="text-white">Testimonials</h1>
                <div className="testimonials-cards">
                    {Constants.PROFILES.map((profile, index) => (
                        <CardProfile key={index} {...profile} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
