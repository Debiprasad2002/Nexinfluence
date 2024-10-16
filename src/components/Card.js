// import React from 'react';
// import '../assets/css/Card.css';

// function Card({ image, price, link }) {
//     return (
//         <div className="card">
//             <img src={image} alt="Product" className="card-image" />
//             <div className="card-details">
//                 <p className="price">${price}</p>
//                 <a href={link} className="buy-button">Buy</a>
//             </div>
//         </div>
//     );
// }

// export default Card;


// import React from 'react';
// import '../assets/css/Card.css';

// function Card({ image, price, link }) {
//     return (
//         <div className="card">
//             <a href={link} target="_blank" rel="noopener noreferrer">
//                 <img src={image} alt="Product" className="card-image" />
//             </a>
//             <div className="card-info">
//                 <p className="card-price">${price}</p>
//                 <a href={link} className="card-link">Buy Now</a>
//             </div>
//         </div>
//     );
// }

// export default Card;


// import React from 'react';
// import '../assets/css/Card.css';

// function Card({ image, price, link }) {
//     return (
//         <div className="card">
//             {/* Image wrapped in anchor tag to open link in a new tab */}
//             <a href={link} target="_blank" rel="noopener noreferrer">
//                 <img src={image} alt="Product" className="card-image" />
//             </a>

//             {/* Card details */}
//             <div className="card-details">
//                 <p className="price">${price}</p>
//             </div>

//             {/* Buttons: Buy Now and Price Tag */}
//             <div className="card-buttons">
//                 <a href={link} target="_blank" rel="noopener noreferrer" className="button buy-button">
//                     Buy Now
//                 </a>
//                 <div className="button price-tag">
//                     Price: ${price}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Card;

import React from 'react';
import '../assets/css/Card.css';

// Import images
import image1 from '../Images/Cardimages/image1.png';
import image2 from '../Images/Cardimages/image2.png';
import image3 from '../Images/Cardimages/image3.png';
import image4 from '../Images/Cardimages/image4.png';
import image5 from '../Images/Cardimages/image5.png';
import image6 from '../Images/Cardimages/image6.png';
import image7 from '../Images/Cardimages/image7.png';
import image8 from '../Images/Cardimages/image8.png';
import image9 from '../Images/Cardimages/image9.png';
import image10 from '../Images/Cardimages/image10.png';
import image11 from '../Images/Cardimages/image11.png';
import image12 from '../Images/Cardimages/image12.png';
import image13 from '../Images/Cardimages/image13.png';
import image14 from '../Images/Cardimages/image14.png';
import image15 from '../Images/Cardimages/image15.png';
import image16 from '../Images/Cardimages/image16.png';
import image17 from '../Images/Cardimages/image17.png';
import image18 from '../Images/Cardimages/image18.png';
import image19 from '../Images/Cardimages/image19.png';
import image20 from '../Images/Cardimages/image20.png';
import image21 from '../Images/Cardimages/image21.png';
import image22 from '../Images/Cardimages/image22.png';
import image23 from '../Images/Cardimages/image23.png';
import image24 from '../Images/Cardimages/image24.png';
import image25 from '../Images/Cardimages/image25.png';
import image26 from '../Images/Cardimages/image26.png';
import image27 from '../Images/Cardimages/image27.png';
import image28 from '../Images/Cardimages/image28.png';
import image29 from '../Images/Cardimages/image29.png';
import image30 from '../Images/Cardimages/image30.png';

// Card data for Featured Products
const featuredProducts = [
    [
        { price: 12.99, link: 'https://example1.com', image: image1, productName: "This is Product Name 1" },
        { price: 19.50, link: 'https://sample2.com', image: image2, productName: "This is Product Name 2" },
        { price: 8.75, link: 'https://webshop3.com', image: image3, productName: "This is Product Name 3" },
        { price: 25.40, link: 'https://store4.com', image: image4, productName: "This is Product Name 4" },
        { price: 14.99, link: 'https://ecommerce5.com', image: image5, productName: "This is Product Name 5" },
        { price: 18.30, link: 'https://randomshop6.com', image: image6, productName: "This is Product Name 6" },
        
    ],
    [
        { price: 11.25, link: 'https://site7.com', image: image7, productName: "This is Product Name 7" },
        { price: 22.45, link: 'https://example8.com', image: image8, productName: "This is Product Name 8" },
        { price: 9.90, link: 'https://shopping9.com', image: image9, productName: "This is Product Name 9" },
        { price: 16.75, link: 'https://onlinestore10.com', image: image10, productName: "This is Product Name 10" },
        { price: 10.40, link: 'https://ecommerce11.com', image: image11, productName: "This is Product Name 11" },
        { price: 27.50, link: 'https://shop12.com', image: image12, productName: "This is Product Name 12" },
    ],
    [
        { price: 5.99, link: 'https://website13.com', image: image13, productName: "This is Product Name 13" },
        { price: 23.25, link: 'https://buy14.com', image: image14, productName: "This is Product Name 14" },
        { price: 15.80, link: 'https://store15.com', image: image15, productName: "This is Product Name 15" },
        { price: 28.99, link: 'https://randomshop16.com', image: image16, productName: "This is Product Name 16" },
        { price: 13.50, link: 'https://link17.com', image: image17, productName: "This is Product Name 17" },
        { price: 17.45, link: 'https://example18.com', image: image18, productName: "This is Product Name 18" },
    ],
    [
        { price: 7.25, link: 'https://store19.com', image: image19, productName: "This is Product Name 19" },
        { price: 20.99, link: 'https://buy20.com', image: image20, productName: "This is Product Name 20" },
        { price: 6.80, link: 'https://ecommerce21.com', image: image21, productName: "This is Product Name 21" },
        { price: 24.50, link: 'https://web22.com', image: image22, productName: "This is Product Name 22" },
        { price: 8.35, link: 'https://example23.com', image: image23, productName: "This is Product Name 23" },
        { price: 21.75, link: 'https://shopping24.com', image: image24, productName: "This is Product Name 24" },
    ],
    [
        { price: 12.49, link: 'https://randomsite25.com', image: image25, productName: "This is Product Name 25" },
        { price: 29.30, link: 'https://onlinestore26.com', image: image26, productName: "This is Product Name 26" },
        { price: 16.20, link: 'https://buy27.com', image: image27, productName: "This is Product Name 27" },
        { price: 18.55, link: 'https://shop28.com', image: image28, productName: "This is Product Name 28" },
        { price: 9.95, link: 'https://randomsite29.com', image: image29, productName: "This is Product Name 29" },
        { price: 22.99, link: 'https://webshop30.com', image: image30, productName: "This is Product Name 30" },
    ]
];

// Card Component
function Card({ image, price, link, productName }) {
    return (
        <div className="card">
            {/* Image wrapped in anchor tag to open link in a new tab */}
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={productName} className="card-image" />
            </a>

            {/* Card details */}
            <div className="card-details">
                <h3 className="product-name">{productName}</h3>
                <p className="price">${price.toFixed(2)}</p>
            </div>

            {/* Buy Now button */}
            <div className="card-buttons">
                <a href={link} target="_blank" rel="noopener noreferrer" className="button buy-button">
                    Buy Now
                </a>
            </div>
        </div>
    );
}

// Featured Product Component
function FeaturedProduct({ title, productData }) {
    return (
        <div className="featured-product">
            <h2>{title}</h2>
            <div className="card-row">
                {productData.map((item, index) => (
                    <div key={index} className={`card-wrapper card-${index}`}>
                        <Card
                            image={item.image}
                            price={item.price}
                            link={item.link}
                            productName={item.productName}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

// Export Components
export { Card };

// Featured Product Exports
export function FeaturedProduct1() {
    return <FeaturedProduct title="Featured Product 1" productData={featuredProducts[0]} />;
}

export function FeaturedProduct2() {
    return <FeaturedProduct title="Featured Product 2" productData={featuredProducts[1]} />;
}

export function FeaturedProduct3() {
    return <FeaturedProduct title="Featured Product 3" productData={featuredProducts[2]} />;
}

export function FeaturedProduct4() {
    return <FeaturedProduct title="Featured Product 4" productData={featuredProducts[3]} />;
}

export function FeaturedProduct5() {
    return <FeaturedProduct title="Featured Product 5" productData={featuredProducts[4]} />;
}
