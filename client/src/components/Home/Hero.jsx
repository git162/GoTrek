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
            <button className="open-sans bg-[#FF8126] pt-2 pb-2 pl-3 pr-3 rounded-md text-[white]">
              Book Now
            </button>
            <button className="open sans border-2 border-[#FF8126] pt-2 pb-2 pl-3 pr-3 rounded-md">
              Learn More
            </button>
          </div>
        </div>
        <div className="right-photo bg-cover relative  h-[80vh] w-[50vw] mt-[4vh] mr-[5vw] rounded-md">
          <img
            className="rounded-md"
            src="https://plus.unsplash.com/premium_photo-1683796885543-1184acc66f51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className="h-[30vh] w-[10vw] rounded-md absolute top-3 left-[-5vw]"
            src="https://images.unsplash.com/photo-1593407581005-8ec9fcae7b4a?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className="h-[25vh] w-[8vw] rounded-md absolute top-3 right-[-5vw]"
            src="https://images.unsplash.com/photo-1527333247789-5f0d9f6539f5?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className="h-[25vh] w-[8vw] rounded-md absolute bottom-20 left-[-3vw]"
            src="https://plus.unsplash.com/premium_photo-1680430093807-7fc44f018889?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className="h-[25vh] w-[8vw] rounded-md absolute bottom-20 right-[-3vw]"
            src="https://images.unsplash.com/photo-1506645728556-ac574e628eca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="four-img flex "></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
