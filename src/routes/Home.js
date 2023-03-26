import React from 'react';
import Hero from '../components/hero-section/Hero';
import Navbar from '../components/navbar/Navbar';
import HomeImg from '../assets/home.jpg';
import Destination from '../components/popular-destinations/Destination';
import RecentTrips from '../components/recent-trips/Trips';
import Footer from '../components/footer-section/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero
                cName="hero"
                heroImg={HomeImg}
                title="Your Journey Your Story"
                text="Choose your favouraite Destination"
                url="/"
                btnClass="show"
                buttonText="Travel Plan"
            />
            <Destination />
            <RecentTrips />
            <Footer />
        </div>
    );
}

export default Home;