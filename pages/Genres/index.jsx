import GenreCard from '../../components/GenreCard/GenreCard';
import GenreNav from '../../components/GenreNav/GenreNav';
import { useStateContext } from '../../contexts/ContextProvider';
import { genresDetails } from '../../data/data';
const Genres = ({ children }) => {
  const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <>
      <div
        className={`flex flex-col gap-4 mt-14 mb-14 px-8 pb-4 overflow-auto ${
          activeMenu && 'md:ml-72'
        } px-8`}
      >
        <GenreNav />
        <div className='grid  gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {genresDetails.map((genre) => (
            <GenreCard key={genre.id} name={genre.name} img={genre.img} icon={genre.icon} />
          ))}
        </div>
        
        
      </div>
    </>
  );
};

export default Genres;
