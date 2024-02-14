import React from 'react';
import './Home.css';
import Ranker from './Ranker';
import SearchBar from './SearchBar';
import  Carousel  from './ProductCarousel';
function Home() {
    return (
        <div className="home-container">
            <header className="header">
                <h1>Welcome to Retail Detective</h1>
                <p className="sub-heading">Your go-to destination for smarter shopping decisions!</p>
            </header>
            <Carousel></Carousel>
            <section className="main-content">
                <p>At Retail Detective, we understand the challenges consumers face when searching for the best deals online. That's why we've developed a powerful application that empowers users like you to take control of your shopping experience.</p>
                <Ranker />
                
            </section>
            
        </div>
    );
}

export default Home;
