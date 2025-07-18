import React from "react";
import Monitor from "@/app/layouts/monitor/monitor";

const Curse = () => {
  return (
    <div className="flex flex-col items-center gap-15 w-[1370px] h-[704px]">
      <div
        id="title-container"
        className="flex flex-col items-center justify-center"
      >
        <h1
          className="font-montreal text-[62px] text-[#716BC8]/70 text-shadow-lg"
          style={{
            textShadow: "3px 5px 5px white, 0px 0px #444",
          }}
        >
          The Curse It Breaks
        </h1>
        <p
          className="font-montreal text-center w-[700px] text-[#171361] opacity-50"
          style={{
            textShadow: "3px 5px 5px white, 0px 0px #444",
          }}
        >
          For every product held back by complexity, confusion, or clutter —
          this is the shift. We step in where others hesitate, untangling chaos
          with clarity, precision, and soul. Our process dissolves the barriers.
        </p>
      </div>
      <Monitor />
    </div>
  );
};

export default Curse;
