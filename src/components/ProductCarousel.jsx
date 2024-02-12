import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import './ProductCarousel.css';

const ProductCarousel = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const options = {
            method: 'GET',
            url: 'https://amazon-and-ebay-products-details.p.rapidapi.com/amazon/%7BproductName%7D',
            headers: {
                'X-RapidAPI-Key': '033278cf74msh5377774c07ccfa2p1b0dbajsnf0fac9117a09',
                'X-RapidAPI-Host': 'amazon-and-ebay-products-details.p.rapidapi.com'
            }
        };

        try {
            console.log('Fetching products...');
            const response = await axios.request(options);
            console.log('Products:', response.data);
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const renderProducts = () => {
        return products.map(product => (
            <div key={product.id}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.price}</p>
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
            <h2>Top 10 Amazon/eBay Products</h2>
            <Slider {...settings}>
                {renderProducts()}
            </Slider>
        </div>
    );
};

export default ProductCarousel;
