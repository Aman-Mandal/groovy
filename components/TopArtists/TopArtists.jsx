import Link from 'next/link';
import { artists } from '../../data/data';
import Artist from '../Artist/Artist';

const TopArtists = () => {
  return (
    <div className='lg:col-span-4 col-span-full swatch_bg-brown p-4 rounded-md flex flex-col gap-4 w-full'>
      <div className='flex items-center justify-between'>
        <p className='text-lg text-gray-100 font-medium'>Top Artists</p>
        <Link href='/Artists'>
          <a className='text-sm swatch_text-primary'>See all</a>
        </Link>
      </div>

      <div className='flex items-center justify-between  overflow-auto py-2'>
        {artists.map((artist, key) => (
          <Artist
            name={artist.name}
            count={artist.count}
            img={artist.img}
            key={key}
          />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
