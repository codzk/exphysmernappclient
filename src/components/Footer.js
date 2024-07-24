import React from "react";
import { Link } from 'react-scroll';
import { Link as RouterLink } from "react-router-dom";
import './Footer.css';
import footerLogo from '../assets/footerlogo.png';

const Footer = ({ showLinks, showLogo }) => {
    return (
        <footer className="footer">
            {showLogo && (
                <div className="footer-logo">
                    <img src={footerLogo} alt="ExPhys Clinic Logo" />
                </div>
            )}
            {showLinks && (
                <div className="footer-links">
                    <Link to="services-section" smooth={true} duration={500}>Our Services</Link>
                    <a href="tel:0412345678">0412345678</a>
                    <Link to="contact-section" smooth={true} duration={500}>Book</Link>
                    <RouterLink to="/admin-login" smooth={true} duration={500}>Admin Login</RouterLink>
                </div>
            )}
            <div className="footer-bottom">
                <p>&copy; ExPhys Clinic 2024. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
