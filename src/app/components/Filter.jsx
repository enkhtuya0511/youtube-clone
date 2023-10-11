import React from "react";
import { useState } from "react";
import { videoData } from "./videoData";

const Filter = ({ buttons, setItems, filterVideos }) => {
  // const [active, setActive] = useState(true);
  return (
    <div className='w-full h-[5%] bg-[#212121] p-[10px] flex gap-[15px] pl-[20px] overflow-auto hover:overflow-scroll"'>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          borderRadius: "32px",
          border: "1px",
          padding: "8px",
          textAlign: "center",
          backgroundColor: "#FFFFFF",
          color: "#000000",
        }}
        onClick={() => setItems(videoData)}
      >
        All
      </button>
      {buttons.map((val, id) => {
        return (
          <button
            key={id}
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: "32px",
              border: "1px",
              padding: "8px",
              textAlign: "center",
              backgroundColor: "#000000",
              color: "#FFFFFF",
            }}
            onClick={() => filterVideos(val)}
          >
            {val}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
