import React from 'react';
import './Home.css';
import Ranker from './Ranker';
import SearchBar from './SearchBar';
import Jumbotron from './Jumbotron.js'; 
function Home() {
  return (
    <div className="home-container">
      <Jumbotron /> {}
      <section className="main-content">
        <p>At E-commerce Ranker, we understand the challenges consumers face when searching for the best deals online. That's why we've developed a powerful application that empowers users like you to take control of your shopping experience.</p>
        <Ranker />
      </section>
    </div>
  );
}

export default Home;
