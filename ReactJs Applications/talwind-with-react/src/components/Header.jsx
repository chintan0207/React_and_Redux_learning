/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Link, NavLink, useNavigate } from "react-router-dom";
import viteLogo from "/vite.svg";
import { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import { Modal } from "reactstrap";
import Login from "./Login";
import DataContext from "../context/DataContext";
import User from "./User";
import SignUp from "./SignUp";

export default function Header() {
  const context = useContext(ThemeContext);
  const { name, theme, setTheme } = context;

  const usercontext = useContext(DataContext);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [showSignup, setShowSignup] = useState(false);
  const signUpToggle = () => setShowSignup(!showSignup);

  const handleLogOut = () => {
    localStorage.removeItem("auth-token");
    toggle();
  };

  const handleSwitch = (e) => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <>
      <header
        className={`${theme == "light" ? "" : "bg-black text-white border-b"
          } navbar md:px-8 font-medium justify-between flex  items-center p-4 px-3  shadow-md`}
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
        <div className="flex items-center justify-center gap-3">
          {localStorage.getItem("auth-token") ? (
            <div className="flex gap-2 relative">
              <div className="usericon rounded-full p-2 text-white bg-black cursor-pointer">
                user
              </div>
              <div className="userdiv absolute top-full">
                <User />
              </div>
              <button
                onClick={handleLogOut}
                className=" text-sm text-white py-2 px-3 rounded-lg cursor-pointer bg-red-500"
              >
                LogOut
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={toggle}
                className=" text-sm text-white py-2 px-3 rounded-lg cursor-pointer bg-blue-600"
              >
                Login
              </button>
              <button
                onClick={signUpToggle}
                className=" text-sm text-white py-2 px-3 rounded-lg cursor-pointer bg-green-800"
              >
                SignUp
              </button>
            </div>
          )}

          <Login modal={modal} toggle={toggle} signUpToggle={signUpToggle} />
          <SignUp
            showSignUp={showSignup}
            signUpToggle={signUpToggle}
            toggle={toggle}
          />
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              onClick={handleSwitch}
              className="sr-only peer"
            />
            <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </header>
    </>
  );
}
