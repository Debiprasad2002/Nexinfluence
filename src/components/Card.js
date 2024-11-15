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

import img1 from '../Images/Cardimages/img1.png';
import img2 from '../Images/Cardimages/img2.png';
import img3 from '../Images/Cardimages/img3.png';
import img4 from '../Images/Cardimages/img4.png';
import img5 from '../Images/Cardimages/img5.png';
import img6 from '../Images/Cardimages/img6.png';
import img7 from '../Images/Cardimages/img7.png';
import img8 from '../Images/Cardimages/img8.png';
import img9 from '../Images/Cardimages/img9.png';
import img10 from '../Images/Cardimages/img10.png';
import img11 from '../Images/Cardimages/img11.png';
import img12 from '../Images/Cardimages/img12.png';
import img13 from '../Images/Cardimages/img13.png';
import img14 from '../Images/Cardimages/img14.png';
import img15 from '../Images/Cardimages/img15.png';
import img16 from '../Images/Cardimages/img16.png';
import img17 from '../Images/Cardimages/img17.png';
import img18 from '../Images/Cardimages/img18.png';
import img19 from '../Images/Cardimages/img19.png';
import img20 from '../Images/Cardimages/img20.png';
import img21 from '../Images/Cardimages/img21.png';
import img22 from '../Images/Cardimages/img22.png';
import img23 from '../Images/Cardimages/img23.png';
import img24 from '../Images/Cardimages/img24.png';
import img25 from '../Images/Cardimages/img25.png';
import img26 from '../Images/Cardimages/img26.png';
import img27 from '../Images/Cardimages/img27.png';
import img28 from '../Images/Cardimages/img28.png';
import img29 from '../Images/Cardimages/img29.png';
import img30 from '../Images/Cardimages/img30.png';
import img31 from '../Images/Cardimages/img31.png';
import img32 from '../Images/Cardimages/img32.png';
import img33 from '../Images/Cardimages/img33.png';
import img34 from '../Images/Cardimages/img34.png';
import img35 from '../Images/Cardimages/img35.png';
import img36 from '../Images/Cardimages/img36.png';




// Card data for Featured Products
const featuredProducts = [
    [
        { price: 12.99, link: 'http://surl.li/pbjjpb ', image: img1, productName: "Just Herbs mini Lipstick Kit" },
        { price: 19.50, link: 'http://surl.li/yobfiu', image: img2, productName: "Just Herbs Massage Cream" },
        { price: 8.75, link: 'http://surl.li/wtvdgu', image: img3, productName: "Just Herbs EDP Perfumes" },
        { price: 25.40, link: 'http://surl.li/odkohw', image: img4, productName: "Just Herbs Serum Waterproof 8ml" },
        { price: 14.99, link: 'http://surl.li/cbwopn', image: img5, productName: "Just Herbs Matte Lipstick" },
        { price: 18.30, link: 'http://surl.li/gclmmm', image: img6, productName: "Just Herbs Red EDP Perfume" },
        { price: 18.55, link: 'http://surl.li/yjisys', image: img28, productName: "Brillare Rose Face Wash" },
        { price: 9.95, link: 'http://surl.li/zbqebk', image: img29, productName: "Brillare Onion Hair Oil Shots" },
        { price: 22.99, link: 'http://surl.li/sikkvb', image: img30, productName: "Brillare Pure Coconut Oil" },  
        
    ],
    [
        { price: 11.25, link: 'http://surl.li/qedhex', image: img7, productName: "Nourish Mantra Luxury Perfume " },
        { price: 22.45, link: 'http://surl.li/nwgblp', image: img8, productName: "Hair Finishing Stick Gel" },
        { price: 9.90, link: 'http://surl.li/vtogvp', image: img9, productName: "Beetroot Blast Lip Balm" },
        { price: 16.75, link: 'http://surl.li/chbbjq', image: img10, productName: "Anti Frizz Hair Wax Stick Wand" },
        { price: 10.40, link: 'http://surl.li/hhgwpk', image: img11, productName: "Turmeric & citrus handmade Soap" },
        { price: 27.50, link: 'http://surl.li/aunmjq', image: img12, productName: "Advanced Beard Growth Oil" },
        { price: 9.95, link: 'http://surl.li/zbqebk', image: img29, productName: "Brillare Onion Hair Oil Shots" },
        { price: 22.99, link: 'http://surl.li/sikkvb', image: img30, productName: "Brillare Pure Coconut Oil" },
    ],
    [
        { price: 5.99, link: 'http://surl.li/qedhex', image: img13, productName: "Carbamide Forte Calcium Tablets" },
        { price: 23.25, link: 'http://surl.li/etdkmw', image: img14, productName: "Carbamide Forte Vitamin B12 Tablets" },
        { price: 15.80, link: 'http://surl.li/febtnx', image: img15, productName: "Multivitamin Supplements for Women" },
        { price: 28.99, link: 'http://surl.li/khqhyg', image: img16, productName: "Biotin Supplement with Multivitamin" },
        { price: 13.50, link: 'http://surl.li/xgfniq', image: img17, productName: "Chelated Magnesium Glycinate Supplement" },
        { price: 17.45, link: 'http://surl.li/yfaavs', image: img18, productName: "Carbamide Forte Vitamin D3 K2" },
        { price: 9.95, link: 'http://surl.li/zbqebk', image: img29, productName: "Brillare Onion Hair Oil Shots" },
        { price: 22.99, link: 'http://surl.li/sikkvb', image: img30, productName: "Brillare Pure Coconut Oil" },
    ],
    [
        { price: 7.25, link: 'http://surl.li/vfmbsa', image: img19, productName: "Kapiva Ayurvedic BP Care Juice" },
        { price: 20.99, link: 'http://surl.li/owjoab', image: img20, productName: "Kapiva Shilajit Gold Resin" },
        { price: 6.80, link: 'http://surl.li/brngnu', image: img21, productName: "Kapiva Dia Free Juice, 1L" },
        { price: 24.50, link: 'http://surl.li/obdtdv5 ', image: img22, productName: "Kapiva Get Slim Juice" },
        { price: 8.35, link: 'http://surl.li/kngijl', image: img23, productName: "Kapiva Skin Foods Glow Mix" },
        { price: 21.75, link: 'http://surl.li/zkmhip', image: img24, productName: "Kapiva Aloe Vera + Amla Juice" },
        { price: 26.75, link: 'http://surl.li/zhjgdz', image: img34, productName: "The Man Company Beard Oil with Almond " },
        { price: 11.60, link: 'http://surl.li/yuxksw', image: img35, productName: "The Man Company SBC - 50gm" },
    ],
    [
        { price: 12.49, link: 'http://surl.li/skyfeq', image: img25, productName: "Brillare Salicylic & Lactic Acid Face Wash" },
        { price: 29.30, link: 'http://surl.li/tsbdhs', image: img26, productName: "Brillare 10% Vitamin C Serum" },
        { price: 16.20, link: 'http://surl.li/hbnfvy', image: img27, productName: "Brillare Terabond Shampoo" },
        { price: 18.55, link: 'http://surl.li/yjisys', image: img28, productName: "Brillare Rose Face Wash" },
        { price: 9.95, link: 'http://surl.li/zbqebk', image: img29, productName: "Brillare Onion Hair Oil Shots" },
        { price: 22.99, link: 'http://surl.li/sikkvb', image: img30, productName: "Brillare Pure Coconut Oil" },
        { price: 15.80, link: 'http://surl.li/febtnx', image: img15, productName: "Multivitamin Supplements for Women" },
        { price: 28.99, link: 'http://surl.li/khqhyg', image: img16, productName: "Biotin Supplement with Multivitamin" },
    ],
    [
        { price: 13.99, link: 'http://surl.li/fbkeuh', image: img31, productName: "The Man Company Black Edt Perfume" },
        { price: 17.80, link: 'http://surl.li/xtoltk', image: img32, productName: "Non-Sticky Daily Moisturizing Cream " },
        { price: 14.50, link: 'http://surl.li/fmzcnb', image: img33, productName: "Specially Curated Perfume Spray" },
        { price: 26.75, link: 'http://surl.li/zhjgdz', image: img34, productName: "The Man Company Beard Oil with Almond " },
        { price: 11.60, link: 'http://surl.li/yuxksw', image: img35, productName: "The Man Company SBC - 50gm" },
        { price: 20.45, link: 'http://surl.li/ajnjnl', image: img36, productName: "he Man Company Glow Pro Face Wash" },
        { price: 17.45, link: 'http://surl.li/yfaavs', image: img18, productName: "Carbamide Forte Vitamin D3 K2" },
        { price: 9.95, link: 'http://surl.li/zbqebk', image: img29, productName: "Brillare Onion Hair Oil Shots" },
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
export function FeaturedProduct6() {
    return <FeaturedProduct title="Featured Product 6" productData={featuredProducts[5]} />;
}
