import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './ProductCarousel.css';
import Button from 'react-bootstrap/Button';
const ProductCarousel = () => {
    const [bestSellers, setBestSellers] = useState('');
    const [decide, setDecide] = useState(true)

    useEffect(() => {
        if (bestSellers === '') {
             fetchBestSellers();
        }
    }, []);

    const fetchBestSellers = async () => {
        const options = {
            method: 'GET',
            url: 'https://real-time-amazon-data.p.rapidapi.com/best-sellers',
            params: {
                category: 'software',
                type: 'BEST_SELLERS',
                page: '1',
                country: 'US'
            },
            headers: {
                'X-RapidAPI-Key': 'a7e83f22d7msh9e6c7b9dc2bc60ap141738jsnd7d05c2b6924',
                'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log('Best Sellers:', response.data);
            setBestSellers(await response.data);
            setDecide(false)
        } catch (error) {
            console.error('Error fetching best sellers:', error);
        }
    };

    const renderBestSellers = () => {
        console.log([bestSellers.data.best_sellers][0])
        return [bestSellers.data.best_sellers][0].map(seller => (
            <div key={seller.rank} className='d-flex flex-column justify-content-center'>
                <h3 className='text'>{seller.product_title}</h3>
                <p>{seller.product_price}</p>
                <img src={seller.product_photo}></img>
                <Button variant="primary" href={seller.product_url} className="rankButton">link</Button>
            </div>
        ));
    };

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    if (decide == true) {
        return
    }
    else {
        return (
            <div className="product-carousel">
                <h2>Top Best Sellers</h2>
                <Slider {...settings}>
                {renderBestSellers()}
                </Slider>
            </div>
        );
    }
};

export default ProductCarousel;
