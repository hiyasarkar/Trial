import React from "react";
import gift1 from "../assets/gift1.gif";
import { Link } from "react-router-dom";

const Gift1 = () => {
  return (
    <div className="card-component">
      <img
        src={gift1}
        alt="gift1"
        className="h-[180px] w-[250px] rounded-xl mx-auto"
      />

      <p className="text-xl mt-10">
        This is a small letter for you!🫶🏻❤️
        <br />
        Thank you for supporting me always. I know that I misbehave with you
        often and also disturb you, but sorry for this. Promise I'll never do
        that shit. And very sorry for that reason, You know what I mean.
        <br />
        Anyway, Loveeeeee Youuuuuuuu🥺🫂
      </p>
      <div className="mt-5">
        <Link
          to="/gifts"
          className="bg-[#f4e5c2] w-[200px] rounded-lg py-2 text-center
                             transition-all duration-300 hover:scale-110"
        >
          See the second gift
        </Link>
      </div>
    </div>
  );
};

export default Gift1;
