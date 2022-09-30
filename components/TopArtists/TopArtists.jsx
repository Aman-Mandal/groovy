import React from "react";
import billie from "../../public/billie.jpg";
import shawn from "../../public/shawn.jpg";
import ed from "../../public/ed.jpg";
import charlie from "../../public/charlie.jpg";
import james from "../../public/james.jpg";
import taylor from "../../public/taylor.png";
import Artist from "./Artist";

const DUMMY_ARTISTS = [
  { name: "Billie Ellish", img: { billie }, plays: "202,436" },
  { name: "Charlie Puth", img: { charlie }, plays: "1,322,436" },
  { name: "Shawn Mendes", img: { shawn }, plays: "903,476" },
  { name: "Taylor Swift", img: { taylor }, plays: "345,990" },
  { name: "James Arthur", img: { james }, plays: "606,997" },
  { name: "Ed Sheeran", img: { ed }, plays: "2,323,445" },
];

const TopArtists = () => {
  return (
    <section className="flex flex-col ml-3 p-3 pb-6 swatch_bg-brown rounded-md w-fit">
      <div className="flex justify-between items-center pb-4">
        <h2 className="text-white font-semibold text-sm">Top Artists</h2>
        <p className="text-white text-xs">See all</p>
      </div>
      <div className="flex gap-4">
        {DUMMY_ARTISTS.map((artist) => (
          <Artist
            key={artist.name}
            img={artist.img}
            name={artist.name}
            plays={artist.plays}
          />
        ))}
      </div>
    </section>
  );
};

export default TopArtists;
