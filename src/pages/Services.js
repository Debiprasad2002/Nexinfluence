import React from 'react';
import '../assets/css/Services.css';
import { Helmet } from 'react-helmet'; // Import Helmet for metadata
import videoSrc from '../assets/serviceintro.mp4'; // Ensure this path is correct
import Footer from '../components/Footer'
import im from '../Images/Service_images/IM.png'
import bs from '../Images/Service_images/BS.png'
import cc from '../Images/Service_images/CC.png'
import sm from '../Images/Service_images/SM.png'

function Services() {
    return (
        <div className="services">

          {/* Helmet for Metadata */}
          <Helmet>
                <title>Our Services - Nexinfluence</title>
                <meta 
                    name="description" 
                    content="Explore Nexinfluence's services, including influencer marketing, social media management, content creation, and brand strategy to elevate your online presence." 
                />
                <meta 
                    name="keywords" 
                    content="influencer marketing, social media management, content creation, brand strategy, online presence, digital marketing, influencer partnerships" 
                />
                <meta name="author" content="Nexinfluence Team" />
                <link rel="canonical" href="https://nexinfluence.online/services" />
            </Helmet>


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
                <div className="service-image">
                {/* Placeholder for image */}
                     </div>
                <div className="service-content">
                    <h2>Influencer Marketing</h2>
                    <p>Welcome to the hub of authentic brand connections! In today's digital age, influencer marketing has become a powerful tool for brands to reach their target audiences effectively. By collaborating with influencers who genuinely resonate with your brand values, you can create meaningful and engaging content that drives consumer trust and loyalty. Our platform connects you with top influencers across various niches, ensuring your products get the attention they deserve. Elevate your brand's presence and watch your engagement soar with the power of influencer marketing!</p>

                </div>
            </div>

            <div className="service-card">
                <div className="service-image"> {/* Placeholder for image */}</div>
                <div className="service-content">
                    <h2>Social Media Management</h2>
                    <p>Unlock the potential of your brand with expert social media management. Our platform helps you navigate the dynamic world of social media, ensuring your content reaches the right audience at the right time. We offer tailored strategies to boost engagement, grow your following, and drive sales through compelling and authentic interactions. Let us connect you with influencers who can amplify your brand's voice and make a lasting impact. Elevate your social media presence today and watch your brand thrive!</p>
                </div>
            </div>

            <div className="service-card">
                <div className="service-image"> {/* Placeholder for image */}</div>
                <div className="service-content">
                    <h2>Content Creation</h2>
                    <p>Enhance your brand’s presence with top-notch content creation services. Our platform connects you with talented creators who craft compelling, authentic, and engaging content tailored to your brand's voice. From eye-catching visuals to impactful copy, we ensure every piece resonates with your audience and drives engagement. Whether you need blogs, social media posts, or videos, our creators are equipped to deliver quality content that boosts your brand’s influence and credibility. Take your brand to new heights with exceptional content creation!</p>
                </div>
            </div>

            <div className="service-card">
                <div className="service-image"> {/* Placeholder for image */}</div>
                <div className="service-content">
                    <h2>Brand Strategy</h2>
                    <p>
                    Elevate your brand with a strategic approach that drives results. Our platform offers comprehensive brand strategy services tailored to your unique goals and market position. From brand positioning to market analysis, we help you develop a clear, compelling identity that resonates with your target audience. By aligning your brand’s vision with actionable strategies, we ensure sustained growth and increased brand loyalty. Partner with us to create a roadmap for your brand’s success and stand out in a crowded marketplace</p>
                </div>
            </div>
        </div>
        {/* <Footer /> */}
        </div>
    );
}

export default Services;
