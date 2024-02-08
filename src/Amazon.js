import axios from "axios";

  export default {
    getData: (search) =>
    axios({
        method: 'GET',
        url: 'https://real-time-amazon-data.p.rapidapi.com/search',
        params: {
          query: 'Phone',
          page: '1',
          country: 'GB',
          category_id: 'aps'
        },
        headers: {
          'X-RapidAPI-Key': 'a4a9148c55mshd51a0247b343d9ep18b62ejsn9b26d87bdecb',
          'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
        }
    })
}