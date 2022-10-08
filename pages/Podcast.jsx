import React from 'react';
import { data } from './podcastData';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

function Podcast() {
  // const [podcast, setPodcast] = useState('');

  // useEffect(() => {
  //   fetch(
  //     'https://allfeeds.ai/api/find_podcasts?key=ztsu956ssarszv4nkwsf&keyword=music'
  //   )
  //     .then((response) => response.json())
  //     .then((response) => setPodcast(response.results))
  //     .catch((err) => console.error(err));
  // }, []);

  // console.log(podcast);

  return (
    <div className=' w-[80%] bg-gray-600 m-auto p-4 rounded-lg overflow-auto '>
      <h1 className=' text-[2.5rem] py-4 text-white text-center font-semibold '>
        Podcasts designed just for you 🎧
      </h1>
      <div className=' grid grid-cols-4 gap-4 m-auto p-4'>
        {data.map((pod) => (
          <div className='p-4 rounded-lg bg-gray-500  ' key={pod.itunes_id}>
            <div className=' rounded-lg overflow-auto'>
              <img
                src={pod.image_url}
                className=' w-56 h-56 m-auto rounded-lg cursor-pointer hover:scale-110 hover:transition-all overflow-hidden '
                alt=''
              />
            </div>
            <div className=' relative top-[-40%] left-[45%] cursor-default'>
              <PlayCircleOutlineIcon fontSize='large' />
            </div>
            <p className=' text-white font-semibold text-center pt-4'>
              {pod.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Podcast;
