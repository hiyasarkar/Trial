import React from "react";
import scanner from "../assets/scanner.png";
import { Link } from "react-router-dom";

const Gift2 = () => {
  return (
    <div className="card-component text-2xl ">
      Scan this please!!
      <img
        src={scanner}
        alt="gift2"
        className="h-[180px] w-[180px] mx-auto mt-15"
      />
      <div className="mt-10">
        <Link
          to="/regret"
          className="bg-[#f4e5c2] w-[200px] rounded-lg py-2 text-center
                             transition-all duration-300 hover:scale-110"
        >
          Click here
        </Link>
      </div>
    </div>
  );
};

export default Gift2;
