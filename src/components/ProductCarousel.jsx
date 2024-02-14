import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import './ProductCarousel.css';

const ProductCarousel = () => {
    const [offers, setOffers] = useState('');
    const [decide, setDecide] = useState(true)
    useEffect(() => {
        if (offers === '') {
            fetchOffers();
        }
    }, []);

    const fetchOffers = async () => {
        const options = {
            method: 'GET',
            url: 'https://amazon-scrapper-api3.p.rapidapi.com/products/B0BSXG8SGQ',
            params: {
              api_key: '17fd230b65a63c27854fdb057d95524c'
            },
            headers: {
              'X-RapidAPI-Key': 'e836cf5203msh52715a7d81a978ap1eb4a7jsne7d2dd82308e',
              'X-RapidAPI-Host': 'amazon-scrapper-api3.p.rapidapi.com'
            }
          };

        try {
            console.log('Fetching offers...');
            const response = await axios.request(options);
            console.log('Offers:', response.data);
            setOffers({offers, result: [response.data]});
            setDecide(false);
        } catch (error) {
            console.error('Error fetching offers:', error);
        }
    };

    const renderOffers = () => {
        return offers.result.map(offer => (
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
    if (decide == true){
        return 
    }
    else{
        return (
            <div className="product-carousel">
                <h2>Top Offers</h2>
                <Slider {...settings}>
                    {renderOffers()}
                </Slider>
            </div>
        );
    }

};

export default ProductCarousel;
