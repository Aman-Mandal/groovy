import axios from 'axios';

export default async function handler(req, res) {
  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/charts/track',
    params: { pageSize: '5', startFrom: '10' },
    headers: {
      'X-RapidAPI-Key': NEXT_PUBLIC_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}
