import Link from "next/link";
import React from "react";

const TopCharts = () => {
  return (
    <div className="row-span-2 col-span-2 swatch_bg-brown p-4 rounded-md flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-lg text-gray-100 font-medium">Genres</p>
        <Link href="/Albums">
          <a className="text-sm swatch_text-primary">See all</a>
        </Link>
      </div>

      <div className="flex items-center flex-wrap gap-3 "></div>
    </div>
  );
};

export default TopCharts;
