import Link from "next/link";
import React from "react";
import Image from "next/image";
import { artists } from "../../data/data";

const TopCharts = () => {
  return (
    <div className="row-span-2 col-span-2 swatch_bg-brown p-4 rounded-md flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-lg text-gray-100 font-medium">Top Charts</p>
        <Link href="/Albums">
          <a className="text-sm swatch_text-primary">See all</a>
        </Link>
      </div>

      <div className="flex items-center flex-wrap gap-3 ">
        {artists.map(
          (artist, index) =>
            index < 4 && (
              <div
                className="flex flex-col items-center gap-2"
                key={artist.name}
              >
                <div className="rounded-md w-28 h-28 overflow-hidden">
                  <Image
                    src={artist.img}
                    alt={artist.name}
                    className="rounded-md w-full object-top"
                  />
                </div>

                <div className="flex-col items-center text-center">
                  <p className="text-gray-200 text-md">{artist.name}</p>
                  <p className="swatch_text-primary text-xs">{artist.count}</p>
                </div>
              </div>
            ),
        )}
      </div>
    </div>
  );
};

export default TopCharts;
