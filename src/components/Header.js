import React from "react";
import { Link } from 'react-scroll';
import './Header.css';
import logo from '../assets/logo.png';

const Header = ({ showLinks, showLogo }) => {
    return (
        <header className="header">
            {showLogo && (
                <div className="logo">
                    <img src={logo} alt="ExPhys Clinic Logo" />
                </div>
            )}
            {showLinks && (
                <nav>
                    <ul>
                        <li><Link to="services-section" smooth={true} duration={500}>Our Services</Link></li>
                        <li><a href="tel:0412345678">0412345678</a></li>
                        <li><Link to="contact-section" smooth={true} duration={500}>Book</Link></li>
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Header;
