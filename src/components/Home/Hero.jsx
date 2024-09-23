import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero-container flex pt-28">
        <div className="left-desc ml-[5vw] mt-[5vw] w-[50vw] ">
          <h3 className="open-sans text-lg font-semibold text-[#FF8126]">
            EXPLORE WITH US
          </h3>
          <h1 className="dm-serif-display text-[9vh] leading-11 text-[#2C2C2C]">
            "Discover Your Next <br />
            Adventure with Us"
          </h1>
          <h4 className="open-sans text-lg text-[#505050] font-llght">
            Embark on an unforgettable journey with our Exceptional Global Tour{" "}
            <br /> Package, offering a seamless blend of luxury, adventure and
            cultural <br /> immersions across the world's most iconic
            destinations
          </h4>
          <div className="buttons flex gap-[2vw] mt-[5vh]">
            <button className="open-sans bg-[#FF8126] pt-2 pb-2 pl-3 pr-3 rounded-md text-[white]">Book Now</button>
            <button className="open sans border-2 border-[#FF8126] pt-2 pb-2 pl-3 pr-3 rounded-md">Learn More</button>
          </div>
        </div>
        <div className="right-photo bg-cover  h-[80vh] w-[50vw] mt-[4vh] mr-[3vw] rounded-md">
            <img className="rounded-md" src="https://plus.unsplash.com/premium_photo-1683796885543-1184acc66f51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;