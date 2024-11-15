import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaSkype, FaPhone, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../assets/css/Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-info">
                <h2>Contact Us</h2>
                <p><FaMapMarkerAlt />Cuttack,Odisha,India</p>
                <p><FaEnvelope /> nexinfluence@gmail.com</p>
                <p><FaSkype /> mike.chemardin</p>
                <p><FaPhone /> +919090258907</p>
                <div className="social-icons">
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaLinkedin /></a>
                </div>
            </div>
            <div className="contact-form-container">
                <h2>Get in Touch</h2>
                <p>Feel free to drop us a line below!</p>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Type your message here..." required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
            

        </div>
    );
}

export default Contact;
