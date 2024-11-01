import React from 'react';

import HeroSection from '../HeroSection/index.tsx';
import Specials from '../Specials/index.tsx';

import './index.css';
import Testimonials from '../Testimonials/index.tsx';

const Main = () => {
    return (
        <main>
            <HeroSection />
            <Specials />
            <Testimonials />
        </main>
    );
};

export default Main;
