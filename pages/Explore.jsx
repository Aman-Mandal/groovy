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
      console.log(data);
      setTopCharts(data);
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
        <div className='grid col-span-4 lg:grid-cols-2 xl:grid-cols-4 row-span-1 rounded-md flex flex-col gap-4 mt-2'>
          <Genres />
          <TopCharts topCharts={topCharts} />
        </div>
      </div>
    </div>
  );
};

export default Explore;
