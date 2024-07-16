import React from "react";
import './Contact.css';
import contactImage from '../assets/contact.jpg';

const Contact = () => {
    return (
        <section className="contact" id="contact-section">
            <div className="contact-image-container">
                <div className="contact-image-background"></div>
                <img src={contactImage} alt="Contact" className="contact-image"/>
            </div>
            <div className="contact-form-container">
                <h2>Get in Touch</h2>
                <p>Please fill out the form below.</p>
                <form>
                    <label>Email</label>
                    <input type="email" name="email" required />
                    
                    <label>Phone Number:</label>
                    <input type="tel" name="phone" reaquired />

                    <label>How can we help?</label>
                    <textarea name="message" required></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;