import React, { useEffect, useState } from 'react';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useStateContext } from '../../contexts/ContextProvider';
import PlayerControls from './PlayerControls';
import NowPlayingImage from './NowPlayingImage';

const Player = () => {
  const {
    audio,
    setAudio,
    setHomePlayerToggle,
    currentSong,
  } = useStateContext();
  const [currentTime, setCurrentTime] = useState(null);
  const [duration, setDuration] = useState(0);
  const [progressTime, setProgressTime] = useState(0);

  useEffect(() => {
    setAudio(new Audio('/sample_music.mp3'));
  }, []);

  useEffect(() => {
    let key;

    key = setInterval(() => {
      setDuration(audio?.duration);
      setCurrentTime(audio?.currentTime);
      setProgressTime((audio?.currentTime / audio?.duration) * 100);
    }, 1000);

    if (progressTime === 100) {
      setHomePlayerToggle(false);
      setProgressTime(0);
      setCurrentTime(0);
    }

    return () => clearTimeout(key);
  }, [audio, audio?.currentTime, progressTime, setHomePlayerToggle]);

  let min_duration = Math.floor(duration / 60);
  let sec_duration = Math.floor(duration % 60);

  let min_currentTime = Math.floor(currentTime / 60);
  let sec_currentTime = Math.floor(currentTime % 60);

  if (sec_currentTime < 10) {
    sec_currentTime = `0${sec_currentTime}`;
  }

  if (sec_duration < 10) {
    sec_duration = `0${sec_duration}`;
  }

  return (
    <div className='row-span-2 col-span-2 swatch_bg-brown w-full flex flex-col rounded-lg'>
      <div className='text-center'>
        <div className='text-white flex justify-between p-3'>
          <div>Player</div>
          <div className='cursor-pointer'>
            <QueueMusicIcon />
          </div>
        </div>

        <div className='py-3 px-3 text-white'>
          <div>
            <div className='my-3'>
              <NowPlayingImage />
            </div>
            <div className='text-3xl'>{currentSong.title}</div>
            <div className='text-lg'>{currentSong.artist}</div>
            {/* <div className='text-sm text-gray-300'>Astroworld</div> */}
          </div>

          <div className='w-full h-auto py-3 px-8 text-xs my-3'>
            <div className='flex justify-between'>
              <div>{`${min_currentTime}:${sec_currentTime}`}</div>
              <div className='progress_div flex items-center'>
                <div
                  className={`top-0 left-0 h-full bg-white`}
                  style={{ width: Math.floor(progressTime) + '%' }}
                ></div>
                <div className='border-[3px] border-white w-4 h-4 rounded-full bg-black' />
              </div>
              <div className='duration'>{`${min_duration}:${sec_duration}`}</div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-player h-full flex flex-col justify-center rounded-b-lg pt-5 pb-5'>
        <PlayerControls />
        <div className='flex flex-col items-center text-white mt-4 font-semibold'>
          <span className='text-center cursor-pointer group'>
            <div className='group-hover:-translate-y-1'>
              <KeyboardArrowUpIcon />
            </div>
            <div className='tracking-wider text-sm'>LYRICS</div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Player);
