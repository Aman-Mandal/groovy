import React from "react";
import Trending from "../components/Trending/Trending";

const Explore = () => {
  return (
    <div className="h-screen flex flex-col gap-8 mt-14 mx-8 ">
      <h2 className="text-2xl font-normal text-gray-100">Trending New Hits</h2>

      <Trending />
    </div>
  );
};

export default Explore;
