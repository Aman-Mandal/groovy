import Image from "next/image";
import React from "react";

const Artist = ({ img, name, count }) => {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer  hover:scale-105 transition-all ease-in">
      <div className="rounded-md w-max h-max overflow-hidden mx-2  z-10">
        <Image
          src={img}
          alt={name}
          width={120}
          height={120}
          className="rounded-md object-center"
        />
      </div>

      <div className="flex-col items-center text-center ">
        <p className="text-gray-200 text-md ">{name}</p>
        <p className="swatch_text-primary text-xs">{count}</p>
      </div>
    </div>
  );
};

export default Artist;
