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
          'X-RapidAPI-Key': 'e836cf5203msh52715a7d81a978ap1eb4a7jsne7d2dd82308e',
          'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
        }
    })
}