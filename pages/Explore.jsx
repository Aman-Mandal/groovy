import React from "react";
import Trending from "../components/Trending/Trending";
import TopArtists from "../components/TopArtists/TopArtists";
import Genres from "../components/Genres/Genres";
import TopCharts from "../components/TopCharts/TopCharts";
import Player from "../components/Player/Player";
import { useStateContext } from "../contexts/ContextProvider";

const Explore = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <div
      className={`flex flex-col gap-4 mt-12 px-8 ${activeMenu && "md:ml-60"}`}
    >
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
