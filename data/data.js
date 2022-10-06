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
import kanye from "../public/kanye.jpeg";
import dua from "../public/dua.jpeg";
import billie from "../public/billie.jpg";
import nicki from "../public/nicki.jpeg";
import starboy from "../public/starboy.jpg";
import travis from "../public/travis.png";
import ed from "../public/ed.jpeg";

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

export const artists = [
  {
    name: "Travis Scott",
    count: "44M Plays",
    img: travis,
  },
  {
    name: "Billie Ellish",
    count: "203M Plays",
    img: billie,
  },
  {
    name: "Dua Lipa",
    count: "63M Plays",
    img: dua,
  },
  {
    name: "Kanye",
    count: "15M Plays",
    img: kanye,
  },
  {
    name: "Nicki Minaj",
    count: "180M Plays",
    img: nicki,
  },
  {
    name: "Starboy",
    count: "100M Plays",
    img: starboy,
  },
  {
    name: "Ed Sheeran",
    count: "100M Plays",
    img: ed,
  },
];

export const charts = [
  {
    songName: "Havana",
    artistName: "Travis Scott",
    img: travis,
    time: '3:45'
  },
  {
    songName: "Jesum is king",
    artistName: "Travis Scott",
    img: billie,
    time: '3:45'
  },
  {
    songName: "Closer",
    artistName: "Travis Scott",
    img: dua,
    time: '3:45'
  },
  {
    songName: "Leon On",
    artistName: "Travis Scott",
    img: kanye,
    time: '3:45'

  },
];

export const genres = [
  "Dance Beat",
  "Electro Pop",
  "Alternative Indie",
  "Hip Hop",
  "Classical",
  "Hip Hop Rap",
  "Country",
  
  
];
