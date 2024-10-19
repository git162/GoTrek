import React from "react";

const Header = () => {
  return (
    <div>
      <div className="h-20 fixed z-20 w-full  justify-between bg-white mt-0 flex items-center shadow-md rounded-md shadow-slate-400">
        <div className="icon inline-block  ml-5">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-black  to-slate-500 text-transparent bg-clip-text">
            GoTrek
          </h1>
        </div>
        <div className="nav-links flex gap-20 mr-5 text-lg font-semibold">
          <h4>Home</h4>
          <h4>Tours</h4>
          <h4>Destinations</h4>
          <h4>About</h4>
          <button className="border-2 border-slate-950 p-1 rounded-md">
            Login/Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
