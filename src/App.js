import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';
import { Helmet } from 'react-helmet'; // Import Helmet


function App() {
    return (
        <Router>
            <Helmet>
                <title>Nexinfluence - Your Gateway to Free Products and Paid Reviews</title>
                <meta name="description" content="Nexinfluence connects influencers with brands to boost engagement and sales." />
                <meta name="keywords" content="Nexinfluence, influencer marketing, brand partnerships, product reviews" />
                <meta name="author" content="Nexinfluence Team" />
            </Helmet>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
