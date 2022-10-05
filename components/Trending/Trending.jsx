import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Trending = () => {
  return (
    <div className="flex items-center justify-between pl-6">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-7xl font-extrabold text-gray-100">
            In My Feelings
          </h1>
          <div className="flex gap-4 items-center">
            <p className="text-3xl text-gray-100">Camila Cabello</p>
            <span className="text-gray-400 text-xl tracking-tighter">
              63 Million Plays
            </span>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <button className="swatch_bg-secondaryLight text-gray-100 text-md p-4 px-6 rounded-full font-bold">
            Listen Now
          </button>
          <button className="rounded-full p-2 border-2 border-gray-300">
            <FavoriteIcon className="swatch_text-secondary" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-12 items-center">
        <div className="flex flex-col items-center gap-4">
          <span className="w-1 h-1 bg-gray-600 cursor-pointer rounded-full"></span>
          <span className="w-1 h-1 bg-gray-100 cursor-pointer rounded-full"></span>
          <span className="w-1 h-1 bg-gray-100 cursor-pointer rounded-full"></span>
          <span className="w-1 h-1 bg-gray-100 cursor-pointer rounded-full"></span>
          <span className="w-1 h-1 bg-gray-100 cursor-pointer rounded-full"></span>
        </div>

        <div className="flex flex-col items-center gap-4">
          <IconButton className="bg-[#080808] text-gray-100">
            <KeyboardArrowUpIcon />
          </IconButton>
          <IconButton className="bg-[#080808] text-gray-100">
            <KeyboardArrowDownIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Trending;
