import React from 'react';
import './Home.css';
import Ranker from './Ranker'
import SearchBar from './SearchBar';
function Home() {


    return (
        <div className="home-container">
            <h1>Welcome to E-commerce Ranker, your go-to destination for smarter shopping decisions!</h1>        
            <SearchBar />
            <p>At E-commerce Ranker, we understand the challenges consumers face when searching for the best deals online. That's why we've developed a powerful application that empowers users like you to take control of your shopping experience.</p>
            <Ranker />
        </div>
    );
}

export default Home;


