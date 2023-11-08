import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
    regoinCode: "US"
  },
  headers: {
    'X-RapidAPI-Key': "7860e96119mshe5fcc7bb91bfb89p1cc964jsn415fb06ad16c",
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const icicleFetch = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};