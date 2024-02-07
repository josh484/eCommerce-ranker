import React, {useState} from 'react';
import api from '../Amazon'
const IndexPage = () => {
    // Create state variables
    let [responseData, setResponseData] = useState('')
    // fetches data
    const fetchData = (e) => {
        e.preventDefault()
        api.getData()
        .then((response)=>{
            setResponseData(response.data)
            console.log(response.data.data.products)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    return (
        <div>
            <h1>{responseData.title}</h1>
            <button onClick={(e) => fetchData(e)} type='button'>Click Me For Data</button>

        </div>
    )
}

export default IndexPage