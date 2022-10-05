import Image from "next/image";
import Link from "next/link";
import React from "react";
import { artists } from "../../data/data";

const TopArtists = () => {
  return (
    <div className="col-span-3 swatch_bg-brown p-4 rounded-md flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-lg text-gray-100 font-medium">Top Artists</p>
        <Link href="/Artists">
          <a className="text-sm swatch_text-primary">See all</a>
        </Link>
      </div>

      <div className="flex items-center justify-between overflow-auto py-2">
        {artists.map((artist) => (
          <div
            className="flex flex-col items-center gap-2 hover:scale-105"
            key={artist.name}
          >
            <div className="rounded-md w-max h-max overflow-hidden mx-2 cursor-pointer z-10">
              <Image
                src={artist.img}
                alt={artist.name}
                width={150}
                height={150}
                className="rounded-md w-full object-top"
              />
            </div>

            <div className="flex-col items-center text-center">
              <p className="text-gray-200 text-md">{artist.name}</p>
              <p className="swatch_text-primary text-xs">{artist.count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
