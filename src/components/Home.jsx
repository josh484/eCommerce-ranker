import React from 'react';
import './Home.css';
import Ranker from './Ranker'
import SearchBar from './SearchBar';
function Home() {


    return (
        <div className="home-container">
            <h1>Welcome to the E-commerce Ranker</h1>        
            <SearchBar />
            <Ranker />
        </div>
    );
}

export default Home;


