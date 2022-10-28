import Link from 'next/link';
// import { useLocation } from 'react-router-dom';
// import { useStateContext } from '../../contexts/ContextProvider';
import Artist from '../components/Artist/Artist';
import Loader from '../components/Loader/Loader';

import { useStateContext } from '../contexts/ContextProvider';

const Artists = (song) => {

  const { activeMenu, setActiveMenu } = useStateContext();
  const { topTrending, isFetching } = useStateContext();
  console.log(topTrending);
  if (typeof window !== "undefined") {
    console.log(`/Artists/${song}.artists[0].adamid`, window.location.pathname)
  }

  return (
    <>
      <div
        className={`flex flex-col gap-4 mt-14 px-8 pb-4 overflow-auto ${activeMenu && 'md:ml-72'
          }`}
      >

        <div className='lg:col-span-4 col-span-full swatch_bg-brown p-4 lg:p-7 rounded-md flex flex-col gap-4 w-full'>
          {isFetching ? (
            <Loader />
          ) : (
            <>
              <div className='flex items-center justify-between px-4'>
                <p className='text-lg text-gray-100 font-medium'> Artists</p>

              </div>

              <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {topTrending.map(
                  (artist, key, song) =>
                    key > 8 && (
                      <Link
                        // to={`/Artists/${song}.artists[0].adamid`}
                        key={key}
                        href={{
                          pathname: '/Artists/[artistId]',
                          query: { artistId: artist?.artists[0].adamid },
                        }}
                      >
                        <a>
                          <Artist
                            name={artist?.artists[0].alias}
                            count={artist.count}
                            img={artist?.images.background}
                            key={key} />
                        </a>
                      </Link>
                    )
                )}
              </div>
            </>
          )}
        </div>

      </div>

    </>


  );
};

export default Artists;
