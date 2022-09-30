import React from "react";
import Trending from "../components/Trending/Trending";
import TopArtists from "../components/TopArtists/TopArtists";
import Genres from "../components/Genres/Genres";
import TopCharts from "../components/TopCharts/TopCharts";
import Player from "../components/Player/Player";

const Explore = () => {
  return (
    <div className="h-screen flex flex-col gap-4 mt-12 mx-8 ">
      <h2 className="text-2xl font-normal text-gray-100">Trending New Hits</h2>

      <Trending />

      <div className="grid grid-cols-4 gap-4 mt-6">
        <TopArtists />
        <Player />
        <Genres />
        <TopCharts />
      </div>
    </div>
  );
};

export default Explore;