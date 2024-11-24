import React from "react";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <div className="w-full h-[60px] flex justify-between items-center p-4 bg-black text-white">
      <div>
        <h1 className="text-2xl">Ninja Services</h1>
      </div>
      <ul className="flex items-center gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar1;
