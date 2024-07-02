import React, { useCallback, useContext } from "react";
import MyContext from "../context/MyContext";
import MySelf from "../components/MySelf";
import UseStateCounter from "../components/UseStateCounter";
import Memo from "../components/Memo";
import { useState } from "react";

const Home = () => {
  const context = useContext(MyContext);
  const { darkMode, count, setCount } = context;

  const [count2, setCount2] = useState(0);

  return (
    <div className={`home row g-0  p-3 ${darkMode ? "darkmode" : ""}`}>
      <div className="col-md-4 p-2">
        <MySelf />
        <button
          className="btn btn-success my-2"
          onClick={() => setCount2(count2 + 1)}
        >
          <span>counter {count2}</span>
        </button>
      </div>
      <div className="col-md-4 p-2">
        <UseStateCounter />
      </div>
      <div className="col-md-4 p-2">
        <Memo />
      </div>
    </div>
  );
};

export default Home;
