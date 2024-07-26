import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import AcorrdionsContainer from "../components/AcorrdionsContainer";
import NumbtnContainer from "../components/NumbtnContainer";
import Cards from "../components/Cards";

/* eslint-disable no-unused-vars */
export default function Contact() {
  const context = useContext(ThemeContext);
  const { theme } = context;

  return (
    <>
      <div
        className={`${
          theme === "light" ? "" : "bg-black text-white"
        } flex flex-col p-3 h-screen`}
      >
        <NumbtnContainer />
        <AcorrdionsContainer />
        <Cards />
      </div>
    </>
  );
}
