import React, { useState, useEffect } from 'react';
import Amazon from '../Amazon'
import Ebay from '../Ebay'
import RankCard from './RankCard';
import Search from './SearchBar'
const IndexPage = (prop) => {
    // Create state variables
    const [responseData, setResponseData] = useState({ result: [] })
    const [ebayData, setEbayData] = useState({ result: [] })
    const [arr, setArr] = useState('')
    const [search, setSearch] = useState('')
    const [decide, setDecide] = useState(true)
    const handleSearch = event => {
        setSearch(event.target.value);

    };

    useEffect(() => {
        if (arr === '') {
            
            setDecide(true);
        } else {
            console.log(arr)
            setDecide(false)
        }
      }, [arr]);



    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const output = await Ebay(search)
        const output2 = await Amazon(search)
        setArr(await { ...output, ...output2})
        
    };
    if (decide == true) {
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
            </div>

        )
    }

    else {
        return (

            <div id='searches'>
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
                </div>
                
                {arr.results.map((result) => (
                    <RankCard
                        name={result.title || result.product_title}
                        price={result.sale_price || result.product_price}
                        image={result.image_url || result.product_photo}
                        link={result.link || result.product_url}
                    />
                ))}
            </div>
        )
    }
}

export default IndexPage