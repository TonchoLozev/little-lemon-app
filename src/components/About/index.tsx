import React from 'react';

import MarioAndAdrianAImg from '../../assets/other/mario-and-adrian-a.png';
import MarioAndAdrianBImg from '../../assets/other/mario-and-adrian-b.png';

import './index.css';

const About = () => {
    return (
        <section id="about" className="about-section grid-layout">
            <div className="about-section-description">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </h3>
                <br></br>
                <h3>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </h3>
            </div>
            <div className="about-section-images">
                <img src={MarioAndAdrianAImg} width={270} height={380} />
                <img src={MarioAndAdrianBImg} width={270} height={380} />
            </div>
        </section>
    );
};

export default About;
