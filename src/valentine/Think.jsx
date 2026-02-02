import React from "react";
import think from "../assets/think.gif";
import { Link } from "react-router-dom";

const Think = () => {
  return (
    <div className="card-component">
      <img
        src={think}
        alt="think"
        className="h-[180px] w-[250px] rounded-xl mx-auto"
      />
      <p className="text-4xl mt-10">Think once please!!🥺</p>
      <p className="text-2xl mt-10">Wanna be my valentine?</p>
      <div className="grid grid-cols-2 mt-5 justify-items-center place-content-center gap-1 text-xl">
        <Link
          to="/success"
          className="bg-[#f4e5c2] w-[150px] rounded-lg py-2 text-center
                     transition-all duration-300 hover:scale-110"
        >
          Yes
        </Link>
        <Link
          to="/last"
          className="bg-[#f4e5c2] w-[150px] rounded-lg py-2 text-center
                     transition-all duration-300 hover:scale-110"
        >
          No
        </Link>
      </div>
    </div>
  );
};

export default Think;
