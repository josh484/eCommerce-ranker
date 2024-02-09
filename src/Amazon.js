import axios from "axios";

  export default {
    getData: (search) =>
    axios({
        method: 'GET',
        url: 'https://real-time-amazon-data.p.rapidapi.com/search',
        params: {
          query: search,
          page: '1',
          country: 'GB',
          category_id: 'aps'
        },
        headers: {
          'X-RapidAPI-Key': '033278cf74msh5377774c07ccfa2p1b0dbajsnf0fac9117a09',
          'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
        }
    })
}