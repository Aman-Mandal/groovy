import Image from 'next/image';
import Link from 'next/link';
import { useStateContext } from '../../contexts/ContextProvider';
// import genres from "../data/genres";
const Genres = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  const genres = [
    'Rock',
    'Devotional',
    'Love',
    'Break-up',
    'Best Friend',
    'Only friend',
    'Silent',
    'DJ',
    "90's",
    'Regional',
    'Traditional',
    'Other',
  ];

  return (
    <div
      className={`flex flex-col gap-4 mt-14 px-8 pb-4 overflow-auto ${
        activeMenu && 'md:ml-72'
      } px-8`}
    >
      <h2 className='text-white text-5xl font-bold'>Browse</h2>

       {/* navlink */}
       <nav class='/Genres'>
        <div class='container flex items-center justify-start p-6 mx-auto text-white capitalize'>
        <Link href={`/Genres/`}>
        <a class='text-white border-b-2 border-blue-500 mx-1.5 sm:mx-6'>
              GENRES & MOODS
            </a>
          </Link>

          <Link href={`/Genres/GenreCategory/podcasts`}>
            <a class='border-b-2 border-transparent hover:text-white hover:border-blue-500 mx-1.5 sm:mx-6'>
              PODCASTS
            </a>
          </Link>
          <Link href={`/Genres/GenreCategory/charts`}>
            <a class='border-b-2 border-transparent hover:text-white  hover:border-blue-500 mx-1.5 sm:mx-6'>
              CHARTS
            </a>
          </Link>
          <Link href={`/Genres/GenreCategory/newreleases`}>
            <a class='border-b-2 border-transparent hover:text-white  hover:border-blue-500 mx-1.5 sm:mx-6'>
              NEW RELEASES
            </a>
          </Link>
          <Link href={`/Genres/GenreCategory/discover`}>
            <a class='border-b-2 border-transparent hover:text-white  hover:border-blue-500 mx-1.5 sm:mx-6'>
              DISCOVER
            </a>
          </Link>

          <Link href={`/Genres/GenreCategory/concerts`}>
          <a class='border-b-2 border-transparent hover:text-white  hover:border-blue-500 mx-1.5 sm:mx-6'>
              CONCERTS
            </a>
          </Link>
        </div>
      </nav>

      {/* genres grid */}
      <section className='flex items-center justify-start flex-wrap p-6'>
        {genres.map((item) => (
          <div key={item}>
            <Link href={`/Genres/${item}`}>
              <a className='flex w-72 items-center px-6 py-4 rounded-md shadow-md bg-grayTheme/80 backdrop-filter backdrop-blur-sm hover:bg-grayTheme/90 ease-in-out duration-75 border-l-4 overflow-hidden m-4 mx-6'>
                <Image
                  src={'/mic.png'}
                  width='50px'
                  height={'50px'}
                  className='filter invert p-4'
                  alt='category'
                />
                <div className='px-3 ml-4'>
                  <h4 className='font-semibold my-0 p-0 text-2xl text-slate-200'>
                    {item}
                  </h4>
                  <p className='text-md text-slate-500'>13k songs</p>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Genres;
