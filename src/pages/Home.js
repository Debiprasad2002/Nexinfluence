import  { useEffect } from 'react'; // Ensure useEffect is imported
import React from 'react';
import MyCarousel from '../components/Carousel';
import { Helmet } from 'react-helmet'; // Import Helmet for metadata
import { 
    FeaturedProduct1, 
    FeaturedProduct2, 
    FeaturedProduct3, 
    FeaturedProduct4, 
    FeaturedProduct5,
    FeaturedProduct6
} from '../components/Card'; // Import all Featured Products here
import Footer from '../components/Footer';
import '../assets/css/Home.css';

function Home() {

    // <--------------------------------------------------Chat bot --------------------------------------------------------------------------------------->
    useEffect(() => {
        // Add Tidio chat script dynamically
        const script = document.createElement('script');
        script.src = "//code.tidio.co/mwhkdwlxn2sw71nvv8xsofoglka7ajno.js";
        script.async = true;
        document.body.appendChild(script);

        // Clean up the script if the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);


    return (
        <div className="home">
           {/* Add React Helmet component */}
           <Helmet>
                <title>Home - Nexinfluence</title>
                <meta name="description" content="Discover how Nexinfluence connects influencers with brands to boost engagement and sales." />
                <meta name="keywords" content="Nexinfluence, influencer marketing, brand partnerships, product reviews" />
                <meta name="author" content="Nexinfluence Team" />
            </Helmet>
            {/* Carousel Section */}
            <MyCarousel />

            {/* Render all Featured Products */}
            <FeaturedProduct1 />
            <FeaturedProduct2 />
            <FeaturedProduct3 />
            <FeaturedProduct4 />
            <FeaturedProduct5 />
            <FeaturedProduct6 />

            {/* Form Section */}
            <div className="form-section">
    <a href="https://forms.gle/bRmPHiDAnWbsyymo8" target="_blank" rel="noopener noreferrer">
        <button className="form-button">Campaign Details</button>
    </a>
    <a href="https://forms.gle/w1nnLvi7Dzq8QpE97" target="_blank" rel="noopener noreferrer">
        <button className="form-button">Deliverables</button>
    </a>
</div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Home;
