import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import './ProductCarousel.css';

const ProductCarousel = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        fetchOffers();
    }, []);

    const fetchOffers = async () => {
        const options = {
            method: 'GET',
            url: 'https://price-comparison1.p.rapidapi.com/611247373064/offers',
            params: {
                latitude: '37.777805',
                longitude: '-122.49493',
                country: 'US'
            },
            headers: {
                'X-RapidAPI-Key': '033278cf74msh5377774c07ccfa2p1b0dbajsnf0fac9117a09',
                'X-RapidAPI-Host': 'price-comparison1.p.rapidapi.com'
            }
        };

        try {
            console.log('Fetching offers...');
            const response = await axios.request(options);
            console.log('Offers:', response.data);
            setOffers(response.data);
        } catch (error) {
            console.error('Error fetching offers:', error);
        }
    };

    const renderOffers = () => {
        return offers.map(offer => (
            <div key={offer.id}>
                <h3>{offer.name}</h3>
                <p>{offer.price}</p>
            </div>
        ));
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="product-carousel">
            <h2>Top Offers</h2>
            <Slider {...settings}>
                {renderOffers()}
            </Slider>
        </div>
    );
};

export default ProductCarousel;
