import React from "react";
import { Link } from "react-router-dom";
import last from "../assets/last.gif";

const Last = () => {
  return (
    <div className="card-component">
      <img
        src={last}
        alt="last"
        className="h-[180px] w-[250px] rounded-xl mx-auto"
      />
      <p className="text-3xl mt-10">You have only two options to choose🥱</p>
      <div className="grid grid-cols-2 mt-10 text-2xl justify-items-center place-content-center gap-1">
        <Link
          to="/success"
          className="bg-[#f4e5c2] w-[200px] rounded-lg py-2 text-center
                             transition-all duration-300 hover:scale-110 flex items-center justify-center"
        >
          Choose me
        </Link>
        <Link
          to="/success"
          className="bg-[#f4e5c2] w-[200px] rounded-lg py-2 text-center
                             transition-all duration-300 hover:scale-110"
        >
          Choose the person who've sent you this
        </Link>
      </div>
    </div>
  );
};

export default Last;
