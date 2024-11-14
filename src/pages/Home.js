// import React from 'react';
// import MyCarousel from '../components/Carousel';
// import Card from '../components/Card';
// import Footer from '../components/Footer';
// import '../assets/css/Home.cscode .s';

// function Home() {
//     const cardData = [
//         { image: '/images/image1.png', price: '29.99', link: 'https://amazon.com' },
//         { image: '/images/image2.png', price: '39.99', link: 'https://flipkart.com' },
//         { image: '/images/image3.png', price: '49.99', link: 'https://nykaa.com' },
//         { image: '/images/image4.png', price: '59.99', link: 'https://myntra.com' },
//     ];

//     return (
//         <div className="home">
//             <MyCarousel />
//             <div className="card-container">
//                 <h2>Featured Products</h2>
//                 <div className="card-row">
//                     {cardData.map((item, index) => (
//                         <Card key={index} image={item.image} price={item.price} link={item.link} />
//                     ))}
//                 </div>
//             </div>
            
//             <div className="form-section">
//                 <button className="form-button">Campaign Details</button>
//                 <button className="form-button">Deliverables</button>
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default Home;



// import React from 'react';
// import MyCarousel from '../components/Carousel';
// import Card from '../components/Card';
// import Footer from '../components/Footer';
// import '../assets/css/Home.css';

// function Home() {
//     const cardData = [
//         { image: '/images/Cardimages/image1.webp', price: '29.99', link: 'https://amazon.com' },
//         { image: '/images/Cardimages/image2.webp', price: '39.99', link: 'https://flipkart.com' },
//         { image: '/images/Cardimages/image3.webp', price: '49.99', link: 'https://nykaa.com' },
//         { image: '/images/Cardimages/image4.webp', price: '59.99', link: 'https://myntra.com' },
//         { image: '/images/Cardimages/image5.webp', price: '59.99', link: 'https://myntra.com' },
//         { image: '/images/Cardimages/image6.webp', price: '59.99', link: 'https://myntra.com' },
//         { image: '/images/Cardimages/image3.webp', price: '59.99', link: 'https://myntra.com' },
//         { image: '/images/Cardimages/image5.webp', price: '59.99', link: 'https://myntra.com' },
//         { image: '/images/image4.png', price: '59.99', link: 'https://myntra.com' },


//         // Add more products as needed
//     ];

//     return (
//         <div className="home">
//             <MyCarousel />

//             {[1, 2, 3, 4, 5].map((section, index) => (
//                 <div key={index} className="card-container">
//                     <h2>Featured Products {section}</h2>
//                     <div className="card-row">
//                         {cardData.map((item, i) => (
//                             <Card key={i} image={item.image} price={item.price} link={item.link} />
//                         ))}
//                     </div>
//                 </div>
//             ))}

//             <div className="form-section">
//                 <button className="form-button">Campaign Details</button>
//                 <button className="form-button">Deliverables</button>
//             </div>
            
//             <Footer />
//         </div>
//     );
// }

// export default Home;

//../assets/images/Cardimages

// import React, { useState, useEffect } from 'react';
// import MyCarousel from '../components/Carousel';
// import Card from '../components/Card';
// import Footer from '../components/Footer';
// import '../assets/css/Home.css';

// function Home() {
//     // Dynamically import all images from the Cardimages folder
//     const importAllImages = (requireContext) => {
//         return requireContext.keys().map(requireContext);
//     };

//     const [cardData, setCardData] = useState([]);

//     useEffect(() => {
//         // Load images dynamically from 'Cardimages' folder
//         const images = importAllImages(require.context('../Images/Cardimages', false, /\.(webp|png|jpg|jpeg)$/));
//         const data = images.map((image, index) => ({
//             image: image,  // Image source
//             price: (index + 1) * 10 + '.99',  // Dummy price generation, you can replace it
//             link: `https://example.com/product/${index + 1}`  // Dummy links, replace them as needed
//         }));
//         setCardData(data);
//     }, []);

//     return (
//         <div className="home">
//             {/* Carousel Section */}
//             <MyCarousel />

//             {/* Loop through sections */}
//             {[1, 2, 3, 4, 5].map((section, index) => (
//                 <div key={index} className="card-container">
//                     <h2>Featured Products {section}</h2>
//                     <div className="card-row">
//                         {/* Render Cards */}
//                         {cardData.map((item, i) => (
//                             <div key={i} className={`card-wrapper card-${i}`}>
//                                 <Card
//                                     key={i}
//                                     image={item.image}
//                                     price={item.price}
//                                     link={item.link}
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             ))}

//             {/* Form Section */}
//             <div className="form-section">
//                 <button className="form-button">Campaign Details</button>
//                 <button className="form-button">Deliverables</button>
//             </div>

//             {/* Footer */}
//             <Footer />
//         </div>
//     );
// }

// export default Home;



import React from 'react';
import MyCarousel from '../components/Carousel';
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
    return (
        <div className="home">
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
