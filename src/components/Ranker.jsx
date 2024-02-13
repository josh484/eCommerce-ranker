import React, { useState, useEffect } from 'react';
import Amazon from '../Amazon'
import Ebay from '../Ebay'
import RankCard from './RankCard';
import Search from './SearchBar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



const IndexPage = (prop) => {
    // Create state variables
    const [amazonData, setAmazonData] = useState('')
    const [ebayData, setEbayData] = useState('')
    const [arr, setArr] = useState('')
    const [search, setSearch] = useState('')
    const [decide, setDecide] = useState(true)
    const searchArray = [];
    let counter = 1;
    let [rowChanger, setrowChanger] = useState(true);

    const handleSearch = event => {
        setSearch(event.target.value);
    };

    // use effect, when data in the API is put onto the use state use the function handleData() and reveal the mapped cards.
    useEffect(() => {
        if (amazonData === '') {
            setDecide(true);
        } else {
            handleData();
            counter = 0;
        }
    }, [amazonData]);

    // put both API data into an array as an object with same details
    const handleData = async () => {
        await ebayData.products.map((result) => {
            if (result.price != 0 && result.url !== 'https://ebay.com/itm/123456') {
                searchArray.push(
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
                searchArray.push(
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

        searchArray.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

        await setArr(searchArray);
        setDecide(false)
    }

    // On Search do
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const output = await Ebay(search)
        const output2 = await Amazon(search)
        setAmazonData(await output2)
        setEbayData(await output)

    };

    const changer = () => {
        setrowChanger(!rowChanger)
    }
    // Only on first load of the page.
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
    // When first search is made
    else {
        return (
            <div id='searches'>
                <Search
                    change={handleSearch}
                    search={search}
                    click={handleFormSubmit}
                />
                <button type="submit" className="btn btn-primary" onClick={changer} >change</button>
                <Container>
                    <Row className={rowChanger ? null: 'd-flex flex-wrap-reverse flex-row-reverse'} >
                            {
                                arr.map((result) => (
                                    <RankCard
                                        id={counter++}
                                        key={counter}
                                        name={result.name}
                                        price={result.price}
                                        image={result.image}
                                        link={result.url}
                                        website={result.website}
                                    />
                                ))

                            }
                    </Row>
                </Container>
            </div>
        )
    }
}

export default IndexPage