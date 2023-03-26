
import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero-section/Hero';
import AboutImg from "../assets/12.jpg";
import Footer from '../components/footer-section/Footer';
import AboutDetails from '../components/about-details/About';


function About() {
    return (
        <div>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="About"
            />
            <AboutDetails />
            <Footer />

        </div>
    );

}
export default About;