import Link from "next/link";
import React from "react";
import Image from "next/image";
import { charts } from "../../data/data";
import AddBoxIcon from "@mui/icons-material/AddBox";

const TopCharts = () => {
  return (
    <div className="row-span-2 col-span-2 swatch_bg-brown p-4 rounded-md flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-lg text-gray-100 font-medium">Top Charts</p>
        <Link href="/Albums">
          <a className="text-sm swatch_text-primary">See all</a>
        </Link>
      </div>
      <div>
        {charts.map((chart) => (
          <div
            className="gap-2"
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
            key={chart.songName}
          >
            <div className="rounded-md w-28 h-28 overflow-hidden">
              <Image src={chart.img} alt={chart.songName} />
            </div>

            <div style={{ display: "flex" }}>
              <div>
                <p className="text-gray-200 text-md">{chart.songName}</p>
                <small className="swatch_text-primary text-xs">
                  {chart.artistName}
                </small>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "200px",
                }}
              >
                <small className="swatch_text-primary text-xs mr-2">
                  {chart.time}
                </small>
                <p
                  style={{
                    border: "1px solid #192CFD",
                    borderRadius: "5px",
                    padding: "0px 5px",
                  }}
                  className="swatch_text-primary text-xl mr-2"
                >
                  +
                </p>
                <AddBoxIcon className="mr-2" style={{ color: "white" }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCharts;
