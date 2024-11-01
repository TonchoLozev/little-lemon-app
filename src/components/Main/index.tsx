import React from 'react';

import HeroSection from '../HeroSection/index.tsx';
import Specials from '../Specials/index.tsx';
import Testimonials from '../Testimonials/index.tsx';
import About from '../About/index.tsx';

import './index.css';

const Main = () => {
    return (
        <main>
            <HeroSection />
            <Specials />
            <Testimonials />
            <About />
        </main>
    );
};

export default Main;
