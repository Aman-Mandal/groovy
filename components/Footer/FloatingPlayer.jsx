import PlayerControls from '../Player/PlayerControls';
import { useStateContext } from '../../contexts/ContextProvider';
import NowPlayingImage from '../Player/NowPlayingImage';
import Volume from './Volume';

const FloatingPlayer = () => {
  const { activeMenu, currentSong, screenSize } = useStateContext();

  return (
    <div
      className={`lg:hidden absolute bottom-0 flex justify-between items-center bg-black swatch_text-primary w-full px-2 py-1 border-t-[1.5px] border-t-gray-600 ${
        activeMenu && 'md:ml-72 md:w-[calc(100%-18rem)]'
      }`}
    >
      <div className='flex items-center gap-2'>
        <NowPlayingImage width={70} height={70} />
        <div className='flex flex-col w-40 overflow-hidden'>
          <div className='text-base whitespace-nowrap '>
            {currentSong.title}
          </div>
          <div className='text-xs whitespace-nowrap text-gray-600'>
            {currentSong.artist}
          </div>
        </div>
      </div>
      <div className='w-fit sm:w-80 play-cust'>
        <PlayerControls />
      </div>
      {screenSize >= 640 && <Volume />}
    </div>
  );
};

export default FloatingPlayer;
