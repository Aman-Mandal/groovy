import Image from "next/image";
import React from "react";

const Artist = ({ name, img, plays }) => {
  return (
    <div className="flex flex-col justify-center items-center cursor-pointer">
      <Image className="rounded-lg" src={img} height={100} width={100} />
      <h2 className="text-white font-semibold">{name}</h2>
      <p className="font-thin text-xs text-neutral-400">{plays} plays</p>
    </div>
  );
};

export default Artist;
