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
      'X-RapidAPI-Key': 'a4a9148c55mshd51a0247b343d9ep18b62ejsn9b26d87bdecb',
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
