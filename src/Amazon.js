import axios from "axios";

const Amazon = async (search) => {

  const options = {
    method: 'GET',
    url: 'https://amazon_data_extractor.p.rapidapi.com/search/' + search,
    params: {
      api_key: '8045a19e2deb0a201d022a330d701576'
    },
    headers: {
      'X-RapidAPI-Key': 'e836cf5203msh52715a7d81a978ap1eb4a7jsne7d2dd82308e',
      'X-RapidAPI-Host': 'amazon_data_extractor.p.rapidapi.com'
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
