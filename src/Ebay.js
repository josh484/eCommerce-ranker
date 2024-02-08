import axios from "axios";

export default {
    getData: (search) =>
        axios({
            method: 'POST',
            url: 'https://ebay-average-selling-price.p.rapidapi.com/findCompletedItems',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'e836cf5203msh52715a7d81a978ap1eb4a7jsne7d2dd82308e',
                'X-RapidAPI-Host': 'ebay-average-selling-price.p.rapidapi.com'
            },
            data: {
                keywords: 'iPhone',
                excluded_keywords: 'locked cracked case box read LCD',
                max_search_results: "25",
                remove_outliers: 'true',
                site_id: '3',
            }
        })
}