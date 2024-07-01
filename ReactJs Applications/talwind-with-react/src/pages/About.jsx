/* eslint-disable no-unused-vars */
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function About() {
  const context = useContext(ThemeContext);
  const { theme } = context;
  return (
    <>
      <div
        className={`${
          theme === "light" ? "" : "bg-black text-white"
        } px-5 py-4 h-screen`}
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
    </>
  );
}
