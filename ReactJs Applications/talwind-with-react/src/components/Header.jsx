/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import viteLogo from "/vite.svg";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Header() {
  const context = useContext(ThemeContext);
  const { name, theme, setTheme } = context;
  const handleSwitch = (e) => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <>
      <header
        className={`${
          theme == "light" ? "" : "bg-black text-white border-b"
        } navbar animate__animated animate__fadeInDown md:px-8 font-medium justify-between flex  items-center p-4 px-3  shadow-md`}
      >
        <img
          src={viteLogo}
          alt="viteLogo"
          className="animate__animated animate__backInDown"
        />
        <ul className="hidden lg:flex gap-4">
          <li
            className="animate__animated animate__backInDown"
            style={{ animationDelay: "100ms" }}
          >
            <NavLink
              className={({ isActive }) => {
                if (isActive) return " text-blue-700";
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li
            className="animate__animated animate__backInDown"
            style={{ animationDelay: "150ms" }}
          >
            <NavLink
              className={({ isActive }) => (isActive ? " text-blue-700" : " ")}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li
            className="animate__animated animate__backInDown"
            style={{ animationDelay: "200ms" }}
          >
            <NavLink
              className={({ isActive }) => {
                if (isActive) return " text-blue-700";
              }}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            onClick={handleSwitch}
            className="sr-only peer"
          />
          <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium ">DarkMode</span>
        </label>
      </header>
    </>
  );
}
