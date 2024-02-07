import React, { useState } from 'react';
import api from '../Amazon'
import RankCard from './RankCard';
const IndexPage = () => {
    // Create state variables
    const [responseData, setResponseData] = useState({result: []})
    // fetches data
    const fetchData = () => {
        api.getData()
            .then((response) => {
                setResponseData({...responseData, result: response.data.data.products})
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        fetchData();
    };

    return (
        <div>
            <button onClick={handleFormSubmit} type='button'>Click Me For Data</button>
            <div id='searches'>
                 {responseData.result.map((result) => (
                    <RankCard 
                    name={result.product_title}
                    price={result.product_price}
                    />
                
                ))}
            </div>
        </div>
    )
}

export default IndexPage