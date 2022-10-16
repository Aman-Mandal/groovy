import Image from 'next/image';
import Link from 'next/link';
import { useStateContext } from '../../../contexts/ContextProvider';
import { useRouter } from 'next/router';

const GenreCategory = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  const genreCategory = useRouter().query.genreCategory;

  function renderUnderline(title, link) {
    if (genreCategory === link) {
      return (
        <a class='text-white border-b-2 border-blue-500 mx-1.5 sm:mx-6'>
          {title}
        </a>
      );
    } else {
      return (
        <a class='border-b-2 border-transparent hover:text-white hover:border-blue-500 mx-1.5 sm:mx-6'>
          {title}
        </a>
      );
    }
  }

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
            {renderUnderline('GENRES & MOODS', 'genresandmoods')}
          </Link>
          <Link href={`/Genres/GenreCategory/podcasts`}>
            {renderUnderline('PODCASTS', 'podcasts')}
          </Link>
          <Link href={`/Genres/GenreCategory/charts`}>
            {renderUnderline('CHARTS', 'charts')}
          </Link>
          <Link href={`/Genres/GenreCategory/newreleases`}>
            {renderUnderline('NEW RELEASES', 'newreleases')}
          </Link>
          <Link href={`/Genres/GenreCategory/discover`}>
            {renderUnderline('DISCOVER', 'discover')}
          </Link>

          <Link href={`/Genres/GenreCategory/concerts`}>
            {renderUnderline('CONCERTS', 'concerts')}
          </Link>
        </div>
      </nav>
      <h1 class='text-white'>{genreCategory}</h1>
    </div>
  );
};

export default GenreCategory;
