import PauseIcon from '@mui/icons-material/Pause';
import RepeatIcon from '@mui/icons-material/Repeat';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useStateContext } from '../../contexts/ContextProvider';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const PlayerControls = () => {
  const {
    audio,
    homePlayerToggle,
    setHomePlayerToggle,
    screenSize,
  } = useStateContext();

  // Handle pause/play
  const playerHandler = () => {
    if (homePlayerToggle) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  const isAboveSmallScreen = screenSize >= 640;

  return (
    <div className='flex justify-around items-center'>
      {isAboveSmallScreen && (
        <>
          <div className='text-white cursor-pointer'>
            <RepeatIcon />
          </div>
          <div className='text-white cursor-pointer'>
            <SkipPreviousIcon />
          </div>
        </>
      )}
      {!isAboveSmallScreen && (
        <FavoriteBorderIcon
          sx={{
            marginRight: '1rem',
            color: 'rgb(87,114,255)',
            fontSize: '32px',
          }}
        />
      )}
      <div
        className='aspect-square w-8 sm:w-14 rounded-2xl flex items-center justify-center bg-white cursor-pointer'
        onClick={() => {
          setHomePlayerToggle((prev) => !prev);
          playerHandler();
        }}
      >
        <span className='text-player'>
          {homePlayerToggle ? <PauseIcon /> : <PlayArrowIcon />}
        </span>
      </div>
      {isAboveSmallScreen && (
        <>
          <div className='text-white cursor-pointer'>
            <SkipNextIcon />
          </div>
          <div className='text-white cursor-pointer'>
            <ShuffleIcon />
          </div>
        </>
      )}
    </div>
  );
};

export default PlayerControls;
