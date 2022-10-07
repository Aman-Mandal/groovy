import { useEffect, useState } from 'react';
import { TopArtists, Genres, TopCharts, Player, Trending } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import axios from 'axios';

const Explore = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  const [topCharts, setTopCharts] = useState([]);

  // api fetch
  const getTopCharts = async () => {
    try {
      const res = await axios.get('api/top/charts');
      const { data } = res;
      setTopCharts(data.tracks);
    } catch (error) {
      console.log('yo', error);
    }
  };

  useEffect(() => {
    getTopCharts();
  }, []);

  return (
    <div
      className={`flex flex-col gap-4 mt-8 px-8 overflow-auto ${
        activeMenu && 'md:ml-72'
      }`}
    >
      <Trending />

      <div className='grid grid-cols-6 gap-x-6 gap-4 mt-2'>
        <TopArtists />
        <Player />
        <Genres />
        <TopCharts topCharts={topCharts} />
      </div>
    </div>
  );
};

export default Explore;
