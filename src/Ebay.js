import axios from "axios";

const Ebay = async (search) => {

  const options = {
    method: 'GET',
    url: 'https://ebay32.p.rapidapi.com/search/' + search,
    params: {
      page: '1',
      country: 'United Kingdom',
      country_code: 'uk'
    },
    headers: {
      'X-RapidAPI-Key': 'a4a9148c55mshd51a0247b343d9ep18b62ejsn9b26d87bdecb',
      'X-RapidAPI-Host': 'ebay32.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }

}

export default Ebay