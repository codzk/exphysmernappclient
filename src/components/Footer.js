import React from "react";
import './Footer.css';
import footerLogo from '../assets/footerlogo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src={footerLogo} alt="ExPhys Clinic Logo" />
            </div>
            <div className="footer-links">
                <a href="#services-section">Our Services</a>
                <a href="tel:0412345678">0412345678</a>
                <a href="#contact-section">Book</a>
                <a href="#admin-login">Admin Login</a>
            </div>
            <div className="footer-bottom">
                <p>&copy; ExPhys Clinic 2024. All Rights Reserved.</p>
            </div>
        </footer>
    );

}

export default Footer;
