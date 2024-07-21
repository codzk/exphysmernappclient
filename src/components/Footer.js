import React from "react";
import './Footer.css';
import footerLogo from '../assets/footerlogo.png';
import { Link } from 'react-scroll';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src={footerLogo} alt="ExPhys Clinic Logo" />
            </div>
            <div className="footer-links">
                <Link to="services-section" smooth={true} duration={500}>Our Services</Link>
                <a href="tel:0412345678">0412345678</a>
                <Link to="contact-section" smooth={true} duration={500}>Book</Link>
                <a href="#admin-login">Admin Login</a>

            </div>
            <div className="footer-bottom">
                <p>&copy; ExPhys Clinic 2024. All Rights Reserved.</p>
            </div>
        </footer>
    );

}

export default Footer;
