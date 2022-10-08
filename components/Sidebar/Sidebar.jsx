import { links } from '../../data/data';
import { useStateContext } from '../../contexts/ContextProvider';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton } from '@mui/material';
import Cross from '../svg/Cross';
import SearchIcon from '@mui/icons-material/Search';

const activeLink =
  'flex items-center gap-4 pl-3 py-1 my-1 text-md cursor-pointer transition-colors duration-200 border-r-2 border-[#192cfd] text-[#192cfd] ';

const normalLink =
  'flex items-center gap-4 pl-3 py-1 my-1 text-md text-gray-100 cursor-pointer hover:text-[#192cfd] transition-colors duration-200 hover:border-r-2 border-[#192cfd]';

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  const router = useRouter();

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  return (
    activeMenu && (
      <div
        className='z-50 fixed w-72 h-full sidebar pl-4 pb-10 pt-2 swatch_bg-brown overflow-auto'
        onClick={(event) => event.stopPropagation()}
      >
        <Cross onClick={() => setActiveMenu(false)} />

        <div className="flex justify-between items-center gap-3 ml-3 md:pt-0 pt-3 text-xl font-extrabold tracking-tight text-slate-900">
          <Link href="/">
            <span className="text-2x text-gray-100 cursor-pointer">Groovy</span>
          </Link>
          <IconButton
            type='button'
            onClick={() => setActiveMenu((prev) => !prev)}
            className='text-xl rounded-full px-3 block md:hidden'
          >
            <CancelIcon className='text-gray-100' />
          </IconButton>
        </div>

        <div className='lg:hidden flex items-center p-3 gap-2 border-[1px] border-gray-500 rounded-md swatch_bg-brown my-3'>
          <SearchIcon className='text-gray-300' fontSize='small' />
          <input
            type='text'
            placeholder='Type here to search'
            className='outline-none border-none text-gray-300 placeholder-gray-300 bg-transparent'
          />
        </div>

        <div className='my-3'>
          {links.map((item) => (
            <div key={item.title} className='w-full flex flex-col gap-2 mb-5'>
              <p className='swatch_text-primary m-3 mb-1 tracking-widest text-sm uppercase'>
                {item.title}
              </p>
              {item.links.map((link) => (
                <Link href={`/${link.name}`} key={link.name}>
                  <div
                    className={
                      router.pathname == `/${link.name}`
                        ? activeLink
                        : normalLink
                    }
                  >
                    {link.icon}
                    <span className='capitalize text-lg'>{link.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  );
};
export default Sidebar;
