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
    let counter = 1;
    const handleSearch = event => {
        setSearch(event.target.value);
    };

    useEffect(() => {
        if (amazonData === '') {

            setDecide(true);
        } else {
            console.log(amazonData)
            handleData();
            setCompare(search)
            counter = 0;
        }
    }, [amazonData]);

    const handleData = async () => {
        await ebayData.products.map((result) => {
            if (result.price != 0 && result.url !== 'https://ebay.com/itm/123456' ) {
                ebayArray.push(
                    {
                        name: result.title,
                        price: result.price.value,
                        image: result.thumbnail,
                        url: result.url,
                        website: 'Ebay',
                    }
                )
            }
        }
        )
        await amazonData.content.offers.map((result) => {
            if (result.price != 0) {
                ebayArray.push(
                    {
                        name: result.name,
                        price: result.price,
                        image: result.image,
                        url: result.link,
                        website: 'Amazon',
                    }
                )
            }
        }
        )

        ebayArray.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

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
                <Search 
                change={handleSearch}
                search={search}
                click={handleFormSubmit}
                />
            </div>
        )
    }

    else {
        return (
            <div id='searches'>
                <Search 
                change={handleSearch}
                search={search}
                click={handleFormSubmit}
                />
                {
                    arr.map((result) => (
                        <RankCard
                            id={counter++}
                            key={counter}
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