import React, { useState } from "react";
import './Contact.css';
import contactImage from '../assets/contact.jpg';
import api from '../api';

const Contact = () => {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/contactMessages', formData);
            alert('Message sent successfully');
            setFormData({ email: '', phone: '', message: '' });
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message');
        }
    };

    return (
        <section className="contact" id="contact-section">
            <div className="contact-image-container">
                <div className="contact-image-background"></div>
                <img src={contactImage} alt="Contact" className="contact-image"/>
            </div>
            <div className="contact-form-container">
                <h2>Get in Touch</h2>
                <p>Please fill out the form below.</p>
                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                    
                    <label>Phone Number:</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />

                    <label>How can we help?</label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} required></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
