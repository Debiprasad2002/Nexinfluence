import React from 'react';
import  '../assets/css/Contact.css';

function Contact() {
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit" className="submit-button">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
