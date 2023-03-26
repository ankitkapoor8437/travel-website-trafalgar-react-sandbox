
import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero-section/Hero';
import ContactImg from "../assets/2.jpg";
import Footer from '../components/footer-section/Footer';
import ContactForm from '../components/contact-form/Contact';

function Contact() {
    return (
        <div>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={ContactImg}
                title="Contact"
            />
            <ContactForm />
            <Footer />

        </div>
    );
}

export default Contact;