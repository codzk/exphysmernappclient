import React from "react";
import './About.css';
import aboutImage from '../assets/epimage.jpg';

const About = () => {
    return (
        <section className="about">
            <div className="about-image-container">
                <div className="about-image-background"></div>
                <img src={aboutImage} alt="EP" className="about-image" />
            </div>
            <div className="about-text">
                <h2>Meet Our Expert</h2>
                <h3>Angeli Milne</h3>
                <p>Clinical Exercise Physiologist</p>
                <p>
                    Welcome to ExPhys Clinic! My name is Angeli Milne, founder of ExPhys Clinic. I am passionate about using exercise physiology to enhance health and well-being. Currently completing my Honours year at the University of Queensland, I have extensive experience in designing personalized, evidence-based exercise programs.
                </p>
                <p>
                    At ExPhys Clinic, we specialize in individuals and holistic care. Our services include home visits, telehealth consultations, outdoor sessions in public parks, hydrotherapy, and exclusive access to a private gym studio. My vision is to bring our expertise to you, wherever it is most convenient, and to work with you to achieve your health and fitness goals.
                </p>
                <p>
                    Our client-centered approach at ExPhys Clinic guarantees that you receive the attention and care you deserve. Whether managing a chronic condition, recovering from an injury, or aiming to improve your fitness, I am here to support you.
                </p>
                <p>
                    Thank you for considering ExPhys Clinic. I look forward to helping you on your journey to be better health and wellness.
                </p>
            </div>
        </section>
    );

}

export default About;