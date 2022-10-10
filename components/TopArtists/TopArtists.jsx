import Link from 'next/link';
import { useStateContext } from '../../contexts/ContextProvider';
import Artist from '../Artist/Artist';
import Loader from '../Loader/Loader';

const TopArtists = () => {
  const { topTrending, isFetching } = useStateContext();
  console.log(topTrending);

  return (
    <div className='lg:col-span-4 col-span-full swatch_bg-brown p-4 rounded-md flex flex-col gap-4 w-full'>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <div className='flex items-center justify-between'>
            <p className='text-lg text-gray-100 font-medium'>Top Artists</p>
            <Link href='/Artists'>
              <a className='text-sm swatch_text-primary'>See all</a>
            </Link>
          </div>

          <div className='flex items-center justify-between overflow-auto py-2'>
            {topTrending.map(
              (artist, key) =>
                key > 8 && (
                  <Artist
                    name={artist?.artists[0].alias}
                    count={artist.count}
                    img={artist?.images.background}
                    key={key}
                  />
                )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default TopArtists;
