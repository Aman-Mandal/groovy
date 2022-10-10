import PauseIcon from "@mui/icons-material/Pause";
import RepeatIcon from "@mui/icons-material/Repeat";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useStateContext } from "../../contexts/ContextProvider";

const PlayerControls = () => {
  const { audio, homePlayerToggle, setHomePlayerToggle } = useStateContext();

  // Handle pause/play
  const playerHandler = () => {
    if (homePlayerToggle) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  return (
    <div className="flex justify-around items-center px-5">
      <div className="text-white cursor-pointer">
        <RepeatIcon />
      </div>
      <div className="text-white cursor-pointer">
        <SkipPreviousIcon />
      </div>
      <div
        className="h-14 w-14 rounded-2xl flex items-center justify-center bg-white cursor-pointer"
        onClick={() => {
          setHomePlayerToggle((prev) => !prev);
          playerHandler();
        }}
      >
        <span className="text-player">
          {homePlayerToggle ? <PauseIcon /> : <PlayArrowIcon />}
        </span>
      </div>
      <div className="text-white cursor-pointer">
        <SkipNextIcon />
      </div>
      <div className="text-white cursor-pointer">
        <ShuffleIcon />
      </div>
    </div>
  );
};

export default PlayerControls;
