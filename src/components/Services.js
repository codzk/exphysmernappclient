import React from "react";
import './Services.css';
import servicesImage from '../assets/services.jpg'






const Services = () => {
    return (
        <section className="services" id="services-section">
            <div className="services-text">
                <h2>Our Services</h2>



                <ul>
                    <li>Home Visit</li>
                    <li>1:1 Gym Session</li>
                    <li>Hydrotherapy</li>
                    <li>Telehealth</li>
                </ul>

        </div>
            <div className="services-image-container">
                <div className="services-image-background"></div>
                <img src={servicesImage} alt="Service" className="services-image"/>
            </div>
        </section>
        
    );
}

export default Services;