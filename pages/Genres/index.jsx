import GenreNav from '../../components/GenreNav/GenreNav';
import { useStateContext } from '../../contexts/ContextProvider';
const Genres = ({ children }) => {
  const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <>
      <div
        className={`flex flex-col gap-4 mt-14 px-8 pb-4 overflow-auto ${
          activeMenu && 'md:ml-72'
        } px-8`}
      >
        <GenreNav />
      </div>
    </>
  );
};

export default Genres;
