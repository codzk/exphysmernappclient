import React from "react";
import { Link } from 'react-scroll';
import './Home.css';
import homeImage from  '../assets/home.jpg'

const Home = () => {
    return (
        <section className="home">
            <div className="home-text">
                <h1>Welcome to ExPhys Clinic!</h1>
                <p> What is Exercise Physiology?</p>
                <p>
                Exercise physiology is a vital part of the healthcare system, playing a crucial role in managing and preventing chronic diseases while promoting healthy lifestyles.
                </p>
                <p>
                Accredited Exercise Physiologists (AEPs) in Australia are highly trained professionals who complete a rigorous four-year university degree. They specialize in designing clinical exercise programs for individuals with a wide range of health issues, including chronic diseases, musculoskeletal injuries, and mental health conditions. Exercise physiology is a vital part of the healthcare system, playing a crucial role in managing and preventing chronic diseases while promoting healthy lifestyles.
                </p>
                <p>
                AEPs in Australia are highly trained professionals who complete a rigorous four-year university degree. They specialize in designing clinical exercise programs for individuals with a wide range of health issues, including chronic diseases, musculoskeletal injuries, and mental health conditions.
                </p>
                <Link to="about-section" smooth={true} duration={500}>
                        <button>Get Started</button>
                </Link>
            </div>
            <div className="home-image-container">
                <div className="home-image-background"></div>
                <img src={homeImage} alt="home" className="home-image"/>
            </div>
           
        </section>
    );
}   

export default Home;