// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import '../assets/css/Carousel.css';

// function MyCarousel() {
//     return (
//         <Carousel autoPlay infiniteLoop showThumbs={false}>
//             <div>
//                 <img src="/images/image1.png" alt="Campaign 1" />
//                 <p className="legend">Beautiful Campaign 1</p>
//             </div>
//             <div>
//                 <img src="/images/image2.png" alt="Campaign 2" />
//                 <p className="legend">Stunning Campaign 2</p>
//             </div>
//             <div>
//                 <img src="/images/image3.png" alt="Campaign 3" />
//                 <p className="legend">Amazing Campaign 3</p>
//             </div>
//             <div>
//                 <img src="/images/image4.png" alt="Campaign 4" />
//                 <p className="legend">Awesome Campaign 4</p>
//             </div>
//         </Carousel>
//     );
// }

// export default MyCarousel;



import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../assets/css/Carousel.css';

// Importing the images
import Car1 from '../Images/Carousel/car1.png';
import Car2 from '../Images/Carousel/car2.png';
import Car3 from '../Images/Carousel/car3.png';
import Car4 from '../Images/Carousel/car4.png';

function MyCarousel() {
    return (
        <Carousel autoPlay infiniteLoop showThumbs={false}>
            <div>
                <img src={Car1} alt="Campaign 1" />
                <p className="legend"></p>
            </div>
            <div>
                <img src={Car2} alt="Campaign 2" />
                <p className="legend"></p>
            </div>
            <div>
                <img src={Car3} alt="Campaign 3" />
                <p className="legend"></p>
            </div>
            <div>
                <img src={Car4} alt="Campaign 4" />
                <p className="legend"></p>
            </div>
        </Carousel>
    );
}

export default MyCarousel;
