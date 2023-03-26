
import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero-section/Hero';
import ServiceImg from '../assets/night.jpg';
import RecentTrips from '../components/recent-trips/Trips';
import Footer from '../components/footer-section/Footer';



function Service() {
    return (
        <div>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={ServiceImg}
                title="Service"
            />


            <RecentTrips />

            <Footer />

        </div>
    );
}

export default Service;