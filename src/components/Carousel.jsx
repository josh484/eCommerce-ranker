import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div>
                    <img src="https://via.placeholder.com/800x400" alt="Slide 1" />
                </div>
                <div>
                    <img src="https://via.placeholder.com/800x400" alt="Slide 2" />
                </div>
                <div>
                    <img src="https://via.placeholder.com/800x400" alt="Slide 3" />
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;
