import React from 'react';
import '../assets/css/Card.css';

function Card({ image, price, link }) {
    return (
        <div className="card">
            <img src={image} alt="Product" className="card-image" />
            <div className="card-details">
                <p className="price">${price}</p>
                <a href={link} className="buy-button">Buy</a>
            </div>
        </div>
    );
}

export default Card;
