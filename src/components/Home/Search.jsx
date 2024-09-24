import React from "react";
import { useState } from "react";
import { Calendar } from 'primereact/calendar';

const Search = () => {
    const [indate, setCheckin] = useState(null);
    const [outdate, setCheckout] = useState(null);
  return (
    <div className="flex justify-center rounded-md items-center bg-slate-100 h-[30vh] w-[70vw] p-6 ml-48 mb-28">
      <form className="flex gap-8">
        <div className="flex flex-col">
          <label htmlFor="destination">Destination</label>
          <input type="text" placeholder="Enter Destination" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="keyword">Keywords</label>
          <input type="text" placeholder="Type your keywords" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="check-in">Check In</label>
          <Calendar value={indate} style={{backgroundColor:"black"}} placeholder="Date:mm/dd/yyyy" onChange={(e) => setCheckin(e.value)} />
          {/* <input type="text" placeholder="Date:dd/mm/yyyy" /> */}
          
        </div>
        <div className="flex flex-col">
          <label htmlFor="check-out">Check Out</label>
          <Calendar value={outdate} placeholder="mm/dd/yyyy" onChange={(e) => setCheckout(e.value)} />
          {/* <input type="text" placeholder="Date:dd/mm/yyyy" /> */}
        </div>
      </form>
      <button></button>
    </div>
  );
};

export default Search;