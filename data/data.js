import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import MicIcon from '@mui/icons-material/Mic';
import RadioIcon from '@mui/icons-material/Radio';
import ReplayIcon from '@mui/icons-material/Replay';
import AlbumIcon from '@mui/icons-material/Album';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FolderIcon from '@mui/icons-material/Folder';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import kanye from '../public/kanye.jpeg';
import dua from '../public/dua.jpeg';
import billie from '../public/billie.jpg';
import nicki from '../public/nicki.jpeg';
import starboy from '../public/starboy.jpg';
import travis from '../public/travis.png';
import ed from '../public/ed.jpeg';
import CelebrationIcon from '@mui/icons-material/Celebration';

export const links = [
  {
    title: 'Menu',
    links: [
      {
        name: 'Explore',
        icon: <OfflineBoltIcon />,
      },
      {
        name: 'Genres',
        icon: <VolumeDownIcon />,
      },
      {
        name: 'Artists',
        icon: <MicIcon />,
      },
      {
        name: 'Radio',
        icon: <RadioIcon />,
      },
    ],
  },

  {
    title: 'Library',
    links: [
      {
        name: 'Recent',
        icon: <ReplayIcon />,
      },
      {
        name: 'Albums',
        icon: <AlbumIcon />,
      },
      {
        name: 'Favourites',
        icon: <FavoriteIcon />,
      },
      {
        name: 'Local',
        icon: <FolderIcon />,
      },
    ],
  },
  {
    title: 'Playlist',
    links: [
      {
        name: 'Create New',
        icon: <AddBoxIcon />,
      },
      {
        name: 'Design Flow',
        icon: <PlayCircleIcon />,
      },
      {
        name: 'Best of 2020',
        icon: <PlayCircleIcon />,
      },
      {
        name: 'Nigeria Jams',
        icon: <PlayCircleIcon />,
      },
    ],
  },
];

export const artists = [
  {
    name: 'Travis Scott',
    count: '44M Plays',
    img: travis,
  },
  {
    name: 'Billie Ellish',
    count: '203M Plays',
    img: billie,
  },
  {
    name: 'Dua Lipa',
    count: '63M Plays',
    img: dua,
  },
  {
    name: 'Kanye',
    count: '15M Plays',
    img: kanye,
  },
  {
    name: 'Nicki Minaj',
    count: '180M Plays',
    img: nicki,
  },
  {
    name: 'Starboy',
    count: '100M Plays',
    img: starboy,
  },
  {
    name: 'Ed Sheeran',
    count: '100M Plays',
    img: ed,
  },
];

export const charts = [
  {
    songName: 'Havana',
    artistName: 'Travis Scott',
    img: travis,
    time: '3:45',
  },
  {
    songName: 'Jesum is king',
    artistName: 'Billie Eilish',
    img: billie,
    time: '3:45',
  },
  {
    songName: 'Closer',
    artistName: 'Dua Lipa',
    img: dua,
    time: '3:45',
  },
  {
    songName: 'Leon On',
    artistName: 'Kanye',
    img: kanye,
    time: '3:45',
  },
];

export const genres = [
  'Dance Beat',
  'Electro Pop',
  'Alternative Indie',
  'Hip Hop',
  'Classical',
  'Hip Hop Rap',
  'Country',
];
export const genresDetails=[
  {
    name:'Party',
    img:'https://img.freepik.com/premium-photo/diverse-melodies-music-background-various-genres_1036975-192876.jpg',
    icon:<CelebrationIcon/>
  },
  {
    name:'Relax',
    img:'https://plus.unsplash.com/premium_photo-1661299213170-6ca8f722f906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG11c2ljfGVufDB8fDB8fHww',
    icon:<CelebrationIcon/>
  }
  ,
  {
    name:'Romance',
    img:'https://images.unsplash.com/photo-1460036521480-ff49c08c2781?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2ljfGVufDB8fDB8fHww',
    icon:<CelebrationIcon/>
  }
  ,
  {
    name:'Feel Good',
    img:'https://images.unsplash.com/photo-1475275166152-f1e8005f9854?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWN8ZW58MHx8MHx8fDA%3D',
    icon:<CelebrationIcon/>
  }
  ,
  {
    name:'Energize',
    img:'https://images.unsplash.com/photo-1453738773917-9c3eff1db985?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljfGVufDB8fDB8fHww',
    icon:<CelebrationIcon/>
  }
  ,
  {
    name:'Workout',
    img:'https://media.istockphoto.com/id/944300692/photo/cheerful-young-athlete-outdoors-by-the-river.jpg?s=612x612&w=0&k=20&c=9Cxf4INOF558cWhE1LAOmXM1RMaUBw8zp8YVIcSkN8M=',
    icon:<CelebrationIcon/>
  }
  ,
  {
    name:'Sad',
    img:'https://media.istockphoto.com/id/2170646485/photo/teenage-girl-sitting-in-front-of-belvedere-vienna.jpg?s=612x612&w=0&k=20&c=LBjGvvaGVI1c-mEgwdJjs5cGRcq2wakKphhv8in93t0=',
    icon:<CelebrationIcon/>
  }
  ,
  {
    name:'Sleep',
    img:'https://media.istockphoto.com/id/483510452/photo/young-woman-sleeping-with-smart-phone-and-headphones-on.jpg?s=612x612&w=0&k=20&c=gUJ9CGHajoHdhnNkekqVwhTOCW7pxl6BVbTawVBVj_U=',
    icon:<CelebrationIcon/>
  }
  ,
  {
    name:'Focus',
    icon:<CelebrationIcon/>,
    img:'https://media.istockphoto.com/id/2151919896/photo/yoga-women-sitting-in-a-padmasana-or-lotus-position-using-laptop-and-headphone.jpg?s=612x612&w=0&k=20&c=2SPbSRlus73jcicPPs_VsqOhT8HK1fVB9Uc_QPt4_os=',
  }
  ,
  {
    name:'Podcasts',
    img:'https://media.istockphoto.com/id/1665391781/photo/ai-robot-working-at-the-radio-station-studio.jpg?s=612x612&w=0&k=20&c=x4B6_59oFssK7zKZkNqMHqaU9jH962603DoDCkefyxA=',
    icon:<CelebrationIcon/>
  }
  ,
  
]
