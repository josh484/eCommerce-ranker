import axios from "axios";

export default {
   getData:  (search) =>
     axios({
            method: 'POST',
            url: 'https://ebay-average-selling-price.p.rapidapi.com/findCompletedItems',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '033278cf74msh5377774c07ccfa2p1b0dbajsnf0fac9117a09',
                'X-RapidAPI-Host': 'ebay-average-selling-price.p.rapidapi.com'
            },
            data: {
                keywords: search,
                max_search_results: "25",
                remove_outliers: 'true',
                site_id: '3',
            }
        })
}