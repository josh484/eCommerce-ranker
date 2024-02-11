import React, { useState, useEffect } from 'react';
import Amazon from '../Amazon'
import Ebay from '../Ebay'
import RankCard from './RankCard';
import Search from './SearchBar'
const IndexPage = (prop) => {
    // Create state variables
    const [amazonData, setAmazonData] = useState('')
    const [ebayData, setEbayData] = useState('')
    const [arr, setArr] = useState('')
    const [compare, setCompare] = useState('')
    const [search, setSearch] = useState('')
    const [decide, setDecide] = useState(true)
    const ebayArray = [];
    const handleSearch = event => {
        setSearch(event.target.value);
    };

    useEffect(() => {
        if (amazonData === '') {

            setDecide(true);
        } else {
            handleData();
            setCompare(search)
            
        }
    }, [amazonData]);

    const handleData = async () =>  {
        await ebayData.products.map((result) => (
                ebayArray.push(
                    {
                        name: result.title,
                        price: result.price.value,
                        image: result.thumbnail,
                        url: result.url,
                        website: 'Ebay',
                    }
                )
            )
        )
        await amazonData.content.offers.map((result) => (
            ebayArray.push(
                {
                    name: result.name,
                    price: result.price,
                    image: result.thumbnail,
                    url: result.link,
                    website: 'Amazon',
                }
            )
        )
    )
    await setArr(ebayArray);
    setDecide(false)
    }


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const output = await Ebay(search)
        const output2 = await Amazon(search)
        setAmazonData(await output2)
        setEbayData(await output)
        
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

                {
                
                arr.map((result) => (
                    <RankCard
                        name={result.name}
                        price={result.price}
                        image={result.image}
                        link={result.url}
                    />
                ))
                
                }
            </div>
        )
    }
}

export default IndexPage