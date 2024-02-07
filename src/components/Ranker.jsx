import React, { useState } from 'react';
import api from '../Amazon'
const IndexPage = () => {
    // Create state variables
    let [responseData, setResponseData] = useState({result: []})
    // fetches data
    const fetchData = () => {
        api.getData()
            .then((response) => {
                setResponseData(response.data.data.products)
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
                <h1>{responseData.map(result => )}</h1>
            </div>
        </div>
    )
}

export default IndexPage