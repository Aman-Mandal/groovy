import Link from 'next/link';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { charts } from '../../data/data';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useStateContext } from '../../contexts/ContextProvider';

const TopCharts = ({ topCharts }) => {
  const { setcurrentSong } = useStateContext();

  console.log(topCharts);

  const selectSongHandler = (song) => {
    setcurrentSong((prev) => {
      return {
        ...prev,
        ...song,
      };
    });
  };

  return (
    <div className='row-span-1 col-span-2 swatch_bg-brown p-4 rounded-md flex flex-col gap-4 overflow-y-scroll'>
      <div className='flex items-center justify-between'>
        <p className='text-lg text-gray-100 font-medium'>Top Charts</p>
        <Link href='/Albums'>
          <a className='text-sm swatch_text-primary'>See all</a>
        </Link>
      </div>
      <div>
        {topCharts.map(
          (chart, index) =>
            index < 3 && (
              <div
                className='gap-2 flex items-center justify-between mb-4'
                key={chart.songName}
                onClick={() =>
                  selectSongHandler({
                    image: chart?.images.coverart,
                    title: chart?.title,
                    artist: chart?.artists[0].alias,
                  })
                }
              >
                <div className='flex items-center gap-3 cursor-pointer'>
                  <div className='rounded-md w-16 h-16 overflow-hidden'>
                    <Image
                      src={chart?.images.coverart}
                      alt={chart?.title}
                      width='100%'
                      height='100%'
                    />
                  </div>

                  <div className='flex flex-col'>
                    <p className='text-gray-100 text-lg font-medium'>
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
                    <p className='swatch_text-primary w-6 h-6 flex items-center justify-center text-xl mr-2 border-[1px] border-[#192CFD]'>
                      +
                    </p>
                    <AddBoxIcon className='mr-2 text-gray-400' />
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default TopCharts;
