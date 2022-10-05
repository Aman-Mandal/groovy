import React from "react";

const Cross = (props) => {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      style={{ strokeWidth: "2" }}
      stroke="currentColor"
      className="w-6 h-6 text-white ml-auto m-5 cursor-pointer md:block hidden"
    >
      <path
        style={{
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
        d="M4.5 19.5l15-15m-15 0l15 15"
      />
    </svg>
  );
};

export default Cross;
