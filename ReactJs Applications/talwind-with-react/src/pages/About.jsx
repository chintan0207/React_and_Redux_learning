/* eslint-disable no-unused-vars */
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import FilterData from "../components/FilterData";

export default function About() {
  const context = useContext(ThemeContext);
  const { theme } = context;
  return (
    <div className="px-3 py-3 ">
      <div
        className={`${
          theme === "light" ? "" : "bg-black text-white"
        } my-4 border rounded-md p-2 `}
      >
        <h2>About</h2>
        <p>
          NavLink - When click on list the active class and aria-current page
          attribute can add to NavLink component
        </p>
        <p>Two way to create active link css</p>
        <p>1. giving .active css in app.css</p>
        <p>
          2. NavLink component provide functionality to return function in
          className which return object of isActive:true
        </p>
      </div>
      <FilterData />
    </div>
  );
}
