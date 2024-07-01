import { useContext } from "react";
import InDeBtn from "../components/InDeBtn";
import NumBtn from "../components/NumBtn";
import ThemeContext from "../context/ThemeContext";

/* eslint-disable no-unused-vars */
export default function Contact() {
  const context = useContext(ThemeContext);
  const { theme } = context;
  const a = [2, 5, 8, 6, 3, 0, 8, 9];
  const colorArray = [
    { c1: "#4287f5" },
    { c2: "#0ca62d" },
    { c3: "#f005a5" },
    { c4: "#e2f50f" },
    { c5: "#6d349e" },
    { c6: "#b50912" },
  ];
  return (
    <div
      className={`${
        theme === "light" ? "" : "bg-black text-white"
      } flex flex-col h-screen`}
    >
      <div
        className={`${
          theme === "light" ? "" : "bg-black text-white"
        } flex py-4 px-5 `}
      >
        {a.map((item, index) => {
          return <NumBtn key={index} item={item} index={index} />;
        })}
      </div>
      <div
        className={`${
          theme === "light" ? "" : "bg-black text-white"
        } flex py-4 px-5 `}
      >
        {a.map((item, index) => {
          return <InDeBtn key={index} item={item} index={index} />;
        })}
      </div>
    </div>
  );
}
