import React, { useEffect } from "react";
import { useState } from "react";
import { Calendar } from "primereact/calendar";

const Search = () => {
  const [indate, setCheckin] = useState(null);
  const [outdate, setCheckout] = useState(null);
  const [dest, setDest] = useState("");
  const [keyWord, setKeyword] = useState("");
  
  console.log("Rendering");
  return (
    <div className="flex-col justify-center rounded-md items-center  bg-slate-100 h-[30vh] w-[70vw] p-6 ml-48 mb-28 relative">
      <form className="flex gap-8 justify-center items-center">
        <div className="flex flex-col">
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            placeholder="Enter Destination"
            onChange={(event) => setDest(event.target.value)}
            value={dest}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="keyword">Keywords</label>
          <input
            type="text"
            placeholder="Type your keywords"
            onChange={(event) => setKeyword(event.target.value)}
            value={keyWord}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="check-in">Check In</label>
          <Calendar
            value={indate}
            style={{ backgroundColor: "black" }}
            placeholder="Date:mm/dd/yyyy"
            onChange={(e) => setCheckin(e.value)}
          />
          {/* <input type="text" placeholder="Date:dd/mm/yyyy" /> */}
        </div>
        <div className="flex flex-col">
          <label htmlFor="check-out">Check Out</label>
          <Calendar
            value={outdate}
            placeholder="mm/dd/yyyy"
            onChange={(e) => setCheckout(e.value)}
          />
          {/* <input type="text" placeholder="Date:dd/mm/yyyy" /> */}
        </div>
      </form>
      <button className="bg-[#FF8126] absolute text-white p-2 pl-5 pr-5 rounded-md right-[35vw] top-36">
        Search
      </button>
    </div>
  );
};

export default Search;
