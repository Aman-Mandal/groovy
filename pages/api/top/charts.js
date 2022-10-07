import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://shazam.p.rapidapi.com/charts/track',
  params: { pageSize: '5', startFrom: '5' },
  headers: {
    'X-RapidAPI-Key': '0ac7392c46msha4f3dfc287416ffp189c80jsnd7cf096105d4',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
