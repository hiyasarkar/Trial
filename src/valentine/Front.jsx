import React from "react";
import front from "../assets/front.gif";
import { Link } from "react-router-dom";
const Front = () => {
  console.log(front);
  return (
    <div className="card-component">
      <img
        src={front}
        alt="front"
        className="h-[180px] w-[250px] rounded-xl mx-auto"
      />
      <p className="text-4xl mt-10">Do you wanna be my valentine?</p>
      <div className="grid grid-cols-2 mt-10 text-2xl justify-items-center place-content-center gap-1">
        <Link
          to="/success"
          className="bg-[#f4e5c2] w-[150px] rounded-lg py-2 text-center
             transition-all duration-300 hover:scale-110"
        >
          Yes
        </Link>
        <Link
          to="/think"
          className="bg-[#f4e5c2] w-[150px] rounded-lg py-2 text-center
             transition-all duration-300 hover:scale-110"
        >
          No
        </Link>
      </div>
    </div>
  );
};

export default Front;
