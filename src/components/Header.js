import React from "react";
import { Link } from 'react-scroll';
import './Header.css';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="ExPhys Clinic Logo" />
            </div>
            <nav>
                <ul>
                    <li><Link to="services-section" smooth={true} duration={500}>Our Services</Link></li>
                    <li><a href="tel:0412345678">0412345678</a></li>
                    <li><Link to= "#book-section" smooth={true} duration={500}>Book</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;