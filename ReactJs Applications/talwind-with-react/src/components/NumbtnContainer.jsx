import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import NumBtn from "./NumBtn";
import InDeBtn from "./InDeBtn";

const NumbtnContainer = () => {
  const context = useContext(ThemeContext);
  const { theme } = context;

  const a = [2, 5, 8, 6, 3, 0, 8, 9];

  return (
    <div className="flex flex-col">
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
};

export default NumbtnContainer;
