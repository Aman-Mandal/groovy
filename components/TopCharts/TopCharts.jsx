import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useStateContext } from '../../contexts/ContextProvider';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import Loader from '../Loader/Loader';
const TopCharts = () => {
  const { setcurrentSong } = useStateContext();
  const [topCharts, setTopCharts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  // api fetch
  const getTopCharts = async () => {
    setIsFetching(true);
    try {
      const { data } = await axios.get('api/top/charts');

      setTopCharts(data);
    } catch (error) {
      console.log('getTopCharts error: ', error);
    }
    setIsFetching(false);
  };

  useEffect(() => {
    getTopCharts();
  }, []);

  const selectSongHandler = (song) => {
    setcurrentSong((prev) => {
      return {
        ...prev,
        ...song,
      };
    });
  };

  return (
    <div className='row-span-1 col-span-2 swatch_bg-brown p-4 rounded-md flex flex-col gap-4'>
      {!isFetching ? (
        <Loader />
      ) : (
        <>
          <div className='flex items-center justify-between'>
            <p className='text-lg text-gray-100 font-medium'>Top Charts</p>
            <Link href='/Albums'>
              <a className='text-sm swatch_text-primary'>See all</a>
            </Link>
          </div>
          <div className='overflow-y-scroll max-h-80'>
            {topCharts.map((chart) => (
              <div
                className='gap-2 flex items-center justify-between mb-4'
                key={chart.key}
                onClick={() =>
                  selectSongHandler({
                    image: chart?.images.coverart,
                    title: chart?.title,
                    artist: chart?.artists[0].alias,
                    song: chart,
                  })
                }
              >
                <div className='flex items-center gap-3 cursor-pointer'>
                  <div className='flex flex-col'>
                    <div className='rounded-md w-16 h-16 overflow-hidden relative'>
                      <Image
                        src={chart?.images.coverart}
                        alt={chart?.title}
                        layout='fill'
                      />
                    </div>
                  </div>

                  <div className='flex flex-col'>
                    <p className='line_clamp_3 text-gray-100 text-lg font-medium min-w-[75px]'>
                      {chart?.title}
                    </p>
                    <small className='text-gray-400 text-xs'>
                      {chart?.artists[0].alias}
                    </small>
                  </div>
                </div>
                <div className='flex'>
                  <div className='flex items-center gap-3'>
                    <small className='swatch_text-primary text-xs mr-2'>
                      3:09
                    </small>
                    <AddIcon
                      fontSize='small'
                      className='swatch_text-primary flex items-center justify-center text-xl mr-2 border-[1px] border-[#192CFD]'
                    />
                    <AddBoxIcon className='mr-2 text-gray-400' />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TopCharts;
