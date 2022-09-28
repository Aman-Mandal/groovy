import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import MicIcon from "@mui/icons-material/Mic";
import RadioIcon from "@mui/icons-material/Radio";
import ReplayIcon from "@mui/icons-material/Replay";
import AlbumIcon from "@mui/icons-material/Album";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FolderIcon from "@mui/icons-material/Folder";
import AddBoxIcon from "@mui/icons-material/AddBox";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export const links = [
  {
    title: "Menu",
    links: [
      {
        name: "Explore",
        icon: <OfflineBoltIcon />,
      },
      {
        name: "Genres",
        icon: <VolumeDownIcon />,
      },
      {
        name: "Albums",
        icon: <StopCircleIcon />,
      },
      {
        name: "Artists",
        icon: <MicIcon />,
      },
      {
        name: "Radio",
        icon: <RadioIcon />,
      },
    ],
  },

  {
    title: "Library",
    links: [
      {
        name: "Recent",
        icon: <ReplayIcon />,
      },
      {
        name: "Albums",
        icon: <AlbumIcon />,
      },
      {
        name: "Favourites",
        icon: <FavoriteIcon />,
      },
      {
        name: "Local",
        icon: <FolderIcon />,
      },
    ],
  },
  {
    title: "Playlist",
    links: [
      {
        name: "Create New",
        icon: <AddBoxIcon />,
      },
      {
        name: "Design Flow",
        icon: <PlayCircleIcon />,
      },
      {
        name: "Best of 2020",
        icon: <PlayCircleIcon />,
      },
      {
        name: "Nigeria Jams",
        icon: <PlayCircleIcon />,
      },
    ],
  },
];
