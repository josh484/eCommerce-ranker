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
      'X-RapidAPI-Key': 'e836cf5203msh52715a7d81a978ap1eb4a7jsne7d2dd82308e',
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