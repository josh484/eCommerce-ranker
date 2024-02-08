import React, { useState } from 'react';
import api from '../Amazon'
import ebay from '../Ebay'
import RankCard from './RankCard';
const IndexPage = () => {
    // Create state variables
    const [responseData, setResponseData] = useState({ result: [] })
    const [ebayData, setEbayData] = useState({ result: [] })
    const [arr, setArr] = useState({ result: [] })
    // fetches data
    const fetchData = async (_callback) => {
        api.getData()
            .then((response) => {
                setResponseData({ ...responseData, result: response.data.data.products })
                ebay.getData()
                    .then((response) => {
                        setEbayData({ ...ebayData, result: response.data.products })
                        _callback();
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            })
            .catch((error) => {
                console.log(error)
            })
    }


    const handleFormSubmit = (event) => {
        event.preventDefault();
        fetchData(function(){
            setArr( {result: [...ebayData.result, ...responseData.result]})
            console.log(arr.result)
        });

    };



    return (
        <div>
            <div id='searches'>
            <button onClick={handleFormSubmit} type='button'>Click Me For Data</button>
                {arr.result.map((result) => (
                    <RankCard
                        name={result.title||result.product_title}
                        price={result.sale_price||result.product_price}
                    />

                ))}
            </div>
        </div>  
    ) 

}

export default IndexPage