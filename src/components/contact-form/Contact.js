import React from "react";
import '../contact-form/Contact-Styles.css';

const ContactForm = () => {
    return (
        <div className="form-container">
            <h1> Send a message to us. </h1>
            <form action="">
                <input placeholder="Name" />
                <input placeholder="Email" />
                <input placeholder="Subject" />
                <textarea  placeholder="Message" name="" id="" cols="30" rows="10"></textarea>
                <button>Send Message</button>
            </form>
        </div>
    );
}


export default ContactForm;