import axios from "axios";

export default {
   getData:  (search) =>
     axios({
            method: 'POST',
            url: 'https://ebay-average-selling-price.p.rapidapi.com/findCompletedItems',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'a4a9148c55mshd51a0247b343d9ep18b62ejsn9b26d87bdecb',
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