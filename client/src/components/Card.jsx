import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Card = (res) => {
  const { trip, image, agency } = res;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className={`h-72 w-96 bg-white rounded-sm mb-8 ml-5 cursor-pointer transform transition-transform duration-300 ${
        isHovered ? "translate-y-2" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="h-48 w-96 rounded-md " src={image} alt={trip} />
      <div className="container-div flex justify-between">
        <div className="lft-div p-1">
          <h4 className="font-semibold text-lg">{trip}</h4>
          <div className="flex text-lg gap-3">
            <h5 className="font-semibold">4.5 </h5>
            <div className="text-red-700 mt-1 text-lg">
              <FaStar />
            </div>
          </div>
          <h5>{agency}</h5>
        </div>
        <div className="rt-div p-1  mr-4">
          <h4 className="font-semibold mt-2">Rs 5000</h4>
          <button className="pt-1 pb-1 pr-3 pl-3 mt-4 rounded-md text-white font-semibold bg-slate-400 active:shadow-[0_0_15px_5px_rgba(98,0,234,0.75)] transition-shadow duration-300">Book</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
