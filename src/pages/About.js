import React from 'react';
import '../assets/css/About.css';
import bannerImage from '../assets/images/aboutus_banner.jpg'; // Replace with your actual image path
import bannerImage2 from '../assets/images/aboutus_card1.jpg'
import Footer from '../components/Footer'

function About() {
    return (
        <div className="about">
            {/* Banner Section */}
            <section className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
                <div className="banner-overlay">
                    <div className="banner-content">
                        <h1>About Us</h1>
                        <p>Nexinfluence is a leader in influencer marketing, helping brands connect with influencers to maximize their reach.</p>
                    </div>
                </div>
            </section>

            {/* Information Section */}
            <section className="about-section">
                <div className="content-wrapper">
                    <div className="content-image">
                        {/* Placeholder for an image */}
                        <img src={bannerImage } alt="Team working" />
                    </div>
                    <div className="content-description">
                        <h2>Welcome to Nexinfluence </h2>
                        <p>Welcome to NexInfluence, your all-in-one platform for redefining influencer marketing. We're a team of passionate professionals dedicated to helping brands and influencers collaborate seamlessly and achieve their goals.</p>
                        <p>Our cutting-edge platform is designed to make influencer marketing faster, more efficient, and transparent. Whether you're an influencer looking to connect with top brands or a brand seeking to promote your products, NexInfluence is your go-to solution..</p>
                        <p>Unlike traditional agencies, we optimize every step of the process. Our platform helps influencers reach the right brands, while brands can easily find influencers who align with their vision. With NexInfluence, you can manage campaigns smoothly, access real-time data analysis, and build impactful partnerships—all with complete transparency.</p>
                        <p>Join NexInfluence today and experience a seamless, data-driven approach to growing your brand or expanding your influence!</p>
                    </div>
                </div>
            </section>

            {/* <Footer /> */}
        </div>
    );
}

export default About;
