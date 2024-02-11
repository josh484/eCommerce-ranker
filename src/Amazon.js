import axios from "axios";

const Amazon = async (search) => {

  const options = {
    method: 'GET',
    url: 'https://amazon-merchant-data.p.rapidapi.com/search-products',
    params: {
      term: search,
      country: 'uk'
    },
    headers: {
      'X-RapidAPI-Key': 'e836cf5203msh52715a7d81a978ap1eb4a7jsne7d2dd82308e',
      'X-RapidAPI-Host': 'amazon-merchant-data.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }

}

export default Amazon
