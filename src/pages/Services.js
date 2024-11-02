import React from 'react';
import '../assets/css/Services.css';
import videoSrc from '../assets/serviceintro.mp4'; // Ensure this path is correct

function Services() {
    return (
        <div className="services">
            {/* Video container */}
            <div className="video-container">
                <video autoPlay muted loop playsInline className="background-video">
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            {/* Content section below the video */}
            <div className="services-content">
                <h1>Our Services</h1>
                <p>We offer a wide range of services to boost your online presence.</p>
                <ul>
                    <li>Influencer Marketing</li>
                    <li>Social Media Management</li>
                    <li>Content Creation</li>
                    <li>Brand Strategy</li>
                </ul>
            </div>
        </div>
    );
}

export default Services;
