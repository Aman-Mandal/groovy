import React from "react"
import bgImage from "../../public/doja.jpg"
import Link from 'next/link'
import Image from 'next/image'
import AddBox from '@mui/icons-material/AddBox';
import Add from '@mui/icons-material/Add';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LaunchIcon from '@mui/icons-material/Launch';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useRouter } from 'next/router';
import { Verified } from "@mui/icons-material";
import Loader from '../../components/Loader/Loader';
import { useStateContext } from '../../contexts/ContextProvider';

const ArtistDetails = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  const {
    query: { artistId },
  } = useRouter();

  const { topTrending, setcurrentSong, topCharts, setTopCharts, isFetching, setIsFetching } =
    useStateContext();

  const selectSongHandler = (song) => {
    setcurrentSong((prev) => {
      return {
        ...prev,
        ...song,
      };
    });
  };
  // More options
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      className={`text-white flex flex-col gap-4 mx-8 mt-4 pb-4 overflow-auto bg-[#18181d] ${activeMenu && 'md:ml-72'}`}
    >
      {/* {artistId} */}

      <div className="relative">
        {/* <img
          className="w-full h-52"
          src="https://wallpapers.com/images/hd/purple-goddess-doja-cat-ysadok5c5ye9lpmo.jpg" alt="dojacat" /> */}
        <Image src={bgImage} />
        <div class="absolute text-white top-2/3 left-32 -translate-x-1/2 -translate-y-1/2">
          <div className="flex">
            <Verified style={{ color: "blue" }} />
            <p className="font-bold text-sm px-2">Verified Artist</p>
          </div>
          <h1 className="font-bold text-5xl">Doja Cat</h1>
          <p className="font-bold text-sm pt-1">222,38398 Monthly listeners</p>
        </div>
      </div>
      <div>
        <div className='row-span-1 lg:col-span-2 col-span-4 w-full swatch_bg-brown px-8 flex flex-col gap-4'>
          {isFetching ? (
            <Loader />
          ) : (
            <>
              <div className="flex flex-row items-center">
                <PlayCircleIcon style={{ color: "blue", fontSize: "70px" }} />
                <button type='' className="bg-transparent border rounded-md px-5 py-1 ml-5">Follow</button>
                <div>
                  <Button
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  >
                    <MoreHorizIcon style={{ color: "white" }} />
                  </Button>
                  <Menu
                    id="fade-menu"
                    MenuListProps={{
                      'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                  >
                    <MenuItem onClick={handleClose}>Unfollow</MenuItem>
                    <MenuItem onClick={handleClose}>Go to artist radio</MenuItem>
                    <MenuItem onClick={handleClose}>Report <LaunchIcon /></MenuItem>
                    <MenuItem onClick={handleClose}>Share</MenuItem>

                  </Menu>
                </div>
              </div>
              <div className='flex items-center justify-between'>

                <p className='text-lg text-gray-100 font-medium'>Popular</p>
                <Link href='/Albums'>
                  <a className='text-sm swatch_text-primary'>See all</a>
                </Link>
              </div>
              <div className='overflow-y-scroll'>
                {topCharts.map((chart) => (
                  <div
                    className='gap-2 flex items-center justify-between mb-4'
                    key={chart.key}
                    onClick={() =>
                      selectSongHandler({
                        image: chart?.images.coverart,
                        title: chart?.title,
                        artist: chart?.artists[0].alias,
                        song: chart,
                      })
                    }
                  >
                    <div className='flex items-center gap-3 cursor-pointer'>
                      <div className='flex flex-col'>
                        <div className='rounded-md w-16 h-16 overflow-hidden relative'>
                          <Image
                            src={chart?.images.coverart}
                            alt={chart?.title}
                            layout='fill'
                          />
                        </div>
                      </div>

                      <div className='flex flex-col'>
                        <p className='line_clamp_3 text-gray-100 text-lg font-medium min-w-[75px]'>
                          {chart?.title}
                        </p>
                        <small className='text-gray-400 text-xs'>
                          {chart?.artists[0].alias}
                        </small>
                      </div>
                    </div>
                    <div className='flex'>
                      <div className='flex items-center gap-3'>
                        <small className='swatch_text-primary text-xs mr-2'>
                          3:09
                        </small>
                        <Add
                          fontSize='small'
                          className='swatch_text-primary flex items-center justify-center text-xl mr-2 border-[1px] border-[#192CFD]'
                        />
                        <AddBox className='mr-2 text-gray-400' />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
    ;
};

export default ArtistDetails;
