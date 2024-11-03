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
                <h1>Our Motto </h1>
                <p>We offer a wide range of services to boost your online presence.</p>
                <ul>
                    <li>Influencer Marketing</li>
                    <li>Social Media Management</li>
                    <li>Content Creation</li>
                    <li>Brand Strategy</li>
                </ul>
            </div>

            <div className="services-2">
            <h1 className="services-title">Nexinfluence</h1>
            <p className="services-description">We offer a wide range of services to boost your online presence.</p>
            
            <div className="service-card">
                <div className="service-image"> {/* Placeholder for image */}</div>
                <div className="service-content">
                    <h2>Influencer Marketing</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
            </div>

            <div className="service-card">
                <div className="service-image"> {/* Placeholder for image */}</div>
                <div className="service-content">
                    <h2>Social Media Management</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
            </div>

            <div className="service-card">
                <div className="service-image"> {/* Placeholder for image */}</div>
                <div className="service-content">
                    <h2>Content Creation</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
            </div>

            <div className="service-card">
                <div className="service-image"> {/* Placeholder for image */}</div>
                <div className="service-content">
                    <h2>Brand Strategy</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Services;
