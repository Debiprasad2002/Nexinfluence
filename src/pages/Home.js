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



import React from 'react';
import MyCarousel from '../components/Carousel';
import Card from '../components/Card';
import Footer from '../components/Footer';
import '../assets/css/Home.css';

function Home() {
    const cardData = [
        { image: '/images/image1.png', price: '29.99', link: 'https://amazon.com' },
        { image: '/images/image2.png', price: '39.99', link: 'https://flipkart.com' },
        { image: '/images/image3.png', price: '49.99', link: 'https://nykaa.com' },
        { image: '/images/image4.png', price: '59.99', link: 'https://myntra.com' },
        { image: '/images/image4.png', price: '59.99', link: 'https://myntra.com' },
        { image: '/images/image4.png', price: '59.99', link: 'https://myntra.com' },
        { image: '/images/image4.png', price: '59.99', link: 'https://myntra.com' },
        { image: '/images/image4.png', price: '59.99', link: 'https://myntra.com' },
        { image: '/images/image4.png', price: '59.99', link: 'https://myntra.com' },

        
        
        


        // Add more products as needed
    ];

    return (
        <div className="home">
            <MyCarousel />

            {[1, 2, 3, 4, 5].map((section, index) => (
                <div key={index} className="card-container">
                    <h2>Featured Products {section}</h2>
                    <div className="card-row">
                        {cardData.map((item, i) => (
                            <Card key={i} image={item.image} price={item.price} link={item.link} />
                        ))}
                    </div>
                </div>
            ))}

            <div className="form-section">
                <button className="form-button">Campaign Details</button>
                <button className="form-button">Deliverables</button>
            </div>
            
            <Footer />
        </div>
    );
}

export default Home;
