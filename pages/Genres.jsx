import Image from "next/image";
import Link from "next/link";
import { useStateContext } from "../contexts/ContextProvider";
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

  return <div
    className={`flex flex-col gap-4 mt-14 px-8 pb-4 overflow-auto ${activeMenu && 'md:ml-72'
      } px-8`}>
    <h2 className="text-white text-5xl font-bold">Genres</h2>
    <h5 className="text-slate-400 text-lg">Available (12 genres)</h5>
    {/* genres grid */}
    <section className="flex items-center justify-start flex-wrap p-6">
      {
        genres.map(item =>
          <Link href={`Genres/${item}`} key={item} >
            <a className="flex w-72 items-center  px-6 py-4 rounded-md shadow-md bg-grayTheme overflow-hidden m-4 mx-6">
              <Image src={"/mic.png"} width='50px' height={"50px"} className="filter invert p-4" alt="category" />
              <div className="px-3 ml-4">
                <h4 className="font-semibold my-0 p-0 text-2xl text-slate-200">
                  {item}
                </h4>
                <p className="text-md text-slate-500">13k songs</p>
              </div>
            </a>
          </Link>)
      }
    </section>
  </div>;
};

export default Genres;
