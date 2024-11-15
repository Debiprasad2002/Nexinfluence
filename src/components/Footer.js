import React from 'react';
import '../assets/css/Footer.css';
import logo from '../assets/images/footer-logo.png';
import facebookIcon from '../assets/images/facebook.png';
import twitterIcon from '../assets/images/twitter.png';
import instagramIcon from '../assets/images/instagram.png';
import linkedinIcon from '../assets/images/linkedin.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-section">
            <div className="footer-logo">
                <img src={logo} alt="Logo" className="footer-logo-image" />
                {/* <p>Your Tagline Here</p> */}
            </div>
                <div className="footer-about">
                    {/* <h3>About Us</h3> */}
                    <p>Where Influencers and brands unite to create brillance</p>
                    {/* <p>Contact Us:</p> */}
                    {/* <p>+91 9090 258 907</p> */}
                    {/* <p>nexinfluence@gmail.com</p> */}
                </div>
            </div>
            <div className="footer-section">
                <h2>Information</h2>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">More Search</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Events</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h2>Helpful Links</h2>
                <ul>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Supports</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="footer-section subscribe-section">
                <h2>Subscribe More Info</h2>
                <div className="subscribe-form">
                    <input type="email" placeholder="Enter your Email" />
                    <button>Subscribe</button>
                </div>
                <div className="footer-socials">
                    <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
                    <a href="https://x.com/nexinfluence?s=09"><img src={twitterIcon} alt="Twitter" /></a>
                    <a href="https://www.instagram.com/nexinfluence.online/profilecard/?igsh=MThodnJhc3lzaTM5eA=="><img src={instagramIcon} alt="Instagram" /></a>
                    <a href="https://www.linkedin.com/company/nexinfluence/"><img src={linkedinIcon} alt="LinkedIn" /></a>
                </div>
            </div>
            <div class="footer-copyright">
            © 2024 NexInfluence. All rights reserved. Powered by NexInfluence Team.

    </div>
        </footer>
    );
}

export default Footer;




// <-------------------------------------------------------------------Change 1 ---------------------------------------------------------------------------------------------------->