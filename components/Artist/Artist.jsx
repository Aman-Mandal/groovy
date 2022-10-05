import Image from "next/image";
import React from "react";

const Artist = ({ img, name, count }) => {
  return (
    <div className="flex flex-col items-center gap-2 hover:scale-105">
      <div className="rounded-md w-max h-max overflow-hidden mx-2 cursor-pointer z-10">
        <Image
          src={img}
          alt={name}
          width={150}
          height={150}
          className="rounded-md w-full object-top"
        />
      </div>

      <div className="flex-col items-center text-center">
        <p className="text-gray-200 text-md">{name}</p>
        <p className="swatch_text-primary text-xs">{count}</p>
      </div>
    </div>
  );
};

export default Artist;
