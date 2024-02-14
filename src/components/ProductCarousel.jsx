import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import './ProductCarousel.css';

const ProductCarousel = () => {
    const [bestSellers, setBestSellers] = useState('');
    const [decide, setDecide] = useState(true)

    useEffect(() => {
        if (bestSellers === ''){
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
            console.log('Fetching best sellers...');
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
            <div key={seller.rank}>
                <h3>{seller.product_title}</h3>
                <p>{seller.product_price}</p>
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
            <h2>Top Best Sellers</h2>
                <Slider {...settings}>
                    {renderBestSellers()}
                </Slider>
        </div>
    );
}
};

export default ProductCarousel;
