import React, { useEffect, useState } from "react";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import Image from "next/image";
import travis from "../../public/travis.png";
import RepeatIcon from "@mui/icons-material/Repeat";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PauseIcon from "@mui/icons-material/Pause";
import { useStateContext } from "../../contexts/ContextProvider";

const Player = () => {
  const { homePlayerToggle, setHomePlayerToggle } = useStateContext();
  const [currentTime, setCurrentTime] = useState(null);
  const [duration, setDuration] = useState(0);
  const [progressTime, setProgressTime] = useState(0);
  const [audio, setAudio] = useState(null);

  // const audio2 = new Audio("/sample_music.mp3");

  useEffect(() => {
    setAudio(new Audio("/sample_music.mp3"));
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

  const playerHandler = () => {
    if (homePlayerToggle) {
      audio.pause();
    } else {
      audio.play();
    }
  };

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
    <div className="row-span-3 swatch_bg-brown w-full flex flex-col rounded-lg">
      <div className="text-center">
        <div className="text-white flex justify-between p-3">
          <div>Player</div>
          <div className="cursor-pointer">
            <QueueMusicIcon />
          </div>
        </div>

        <div className="py-3 px-3 text-white">
          <div>
            <div className="my-3">
              <Image
                src={travis}
                width={240}
                height={180}
                alt="artist-image"
                className="object-cover object-top rounded-md"
              />
            </div>
            <div className="text-3xl">Butterfly Effect</div>
            <div className="text-lg">Travis Scott</div>
            <div className="text-sm text-gray-300">Astroworld</div>
          </div>

          <div className="w-full h-auto py-3 px-8 text-xs my-3">
            <div className="flex justify-between">
              <div>{`${min_currentTime}:${sec_currentTime}`}</div>
              <div className="progress_div flex items-center">
                <div
                  className={`top-0 left-0 h-full bg-white`}
                  style={{ width: Math.floor(progressTime) + "%" }}
                ></div>
                <div className="border-[3px] border-white w-4 h-4 rounded-full bg-black" />
              </div>
              <div className="duration">{`${min_duration}:${sec_duration}`}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-player h-full flex flex-col justify-center rounded-b-lg pt-5 pb-5">
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

        <div className="flex flex-col items-center text-white mt-4 font-semibold">
          <span className="text-center cursor-pointer group">
            <div className="group-hover:-translate-y-1">
              <KeyboardArrowUpIcon />
            </div>
            <div className="tracking-wider text-sm">LYRICS</div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Player);
