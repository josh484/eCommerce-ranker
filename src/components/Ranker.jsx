import React, { useState } from 'react';
import api from '../Amazon'
import ebay from '../Ebay'
import RankCard from './RankCard';
import Search from './SearchBar'
const IndexPage = (prop) => {
    // Create state variables
    const [responseData, setResponseData] = useState({ result: [] })
    const [ebayData, setEbayData] = useState({ result: [] })
    const [arr, setArr] = useState({ result: [] })
    const [search, setSearch] = useState('')
    const handleSearch = event => {
      setSearch(event.target.value);
    };
    // fetches data
    const fetchData = async (_callback) => {
        api.getData(search)
            .then((response) => {
                setResponseData({ ...responseData, result: response.data.data.products })
                ebay.getData(search)
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
        fetchData(function () {
            setArr({ result: [...ebayData.result, ...responseData.result] })
            console.log(arr.result)
        });

    };

    return (
        <div>
            <form className="mt-3 mb-3">
                <div className="row justify-content-center">
                    <div className="col-sm-6">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search..." onChange={handleSearch} value={search} />
                            <button type="submit" className="btn btn-primary" onClick={handleFormSubmit} >Search</button>
                        </div>
                    </div>
                </div>
            </form>

            <div id='searches'>
                <p>{prop.search}</p>
                {arr.result.map((result) => (
                    <RankCard
                        name={result.title || result.product_title}
                        price={result.sale_price || result.product_price}
                        image={result.image_url ||result.product_photo}
                        link={result.link||result.product_url}
                    />
                ))}
            </div>
        </div>

    )

}

export default IndexPage