import axios from 'axios';

export default async function handler(req, res) {
  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/charts/track',
    params: { pageSize: '5', startFrom: '0' },
    headers: {
      'X-RapidAPI-Key': '0ac7392c46msha4f3dfc287416ffp189c80jsnd7cf096105d4',
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
