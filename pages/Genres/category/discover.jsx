import Image from 'next/image';
import Link from 'next/link';
import { useStateContext } from '../../../contexts/ContextProvider';
// import genres from "../data/genres";
const discover = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
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
          <Link href={`/Genres`}>
            <a class='border-b-2 border-transparent hover:text-white  hover:border-blue-500 mx-1.5 sm:mx-6'>
              GENRES & MOODS
            </a>
          </Link>

          <Link href={`/Genres/category/podcasts`}>
            <a class='border-b-2 border-transparent hover:text-white hover:border-blue-500 mx-1.5 sm:mx-6'>
              PODCASTS
            </a>
          </Link>
          <Link href={`/Genres/category/charts`}>
            <a class='border-b-2 border-transparent hover:text-white  hover:border-blue-500 mx-1.5 sm:mx-6'>
              CHARTS
            </a>
          </Link>
          <Link href={`/Genres/category/newreleases`}>
            <a class='border-b-2 border-transparent hover:text-white  hover:border-blue-500 mx-1.5 sm:mx-6'>
              NEW RELEASES
            </a>
          </Link>
          <Link href={`/Genres/category/discover`}>
            <a class='text-white border-b-2 border-blue-500 mx-1.5 sm:mx-6'>
              DISCOVER
            </a>
          </Link>

          <Link href={`/Genres/category/concerts`}>
            <a class='border-b-2 border-transparent hover:text-white  hover:border-blue-500 mx-1.5 sm:mx-6'>
              CONCERTS
            </a>
          </Link>
        </div>
      </nav>
      <h1 class= 'text-white'>DISCOVER</h1>
    </div>
  );
};

export default discover;
