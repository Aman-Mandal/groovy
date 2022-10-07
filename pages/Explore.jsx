import { useEffect } from 'react';
import { TopArtists, Genres, TopCharts, Player, Trending } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import axios from 'axios';

const Explore = ({ topCharts }) => {
  const { activeMenu, setActiveMenu } = useStateContext();

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

export async function getStaticProps() {
  const res = await axios.get('api/top/charts');
  const { data } = res;
  // console.log('yoo', data);

  return {
    props: {
      topCharts: data,
    },
  };
}
