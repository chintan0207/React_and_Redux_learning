import React, { memo, useContext } from "react";
import MyContext from "../context/MyContext";

const UseStateCounter = () => {
  const context = useContext(MyContext);
  const { darkMode, count, setCount } = context;
  console.log("i  am render");
  return (
    <>
      <div className="card p-3">
        <div className="dflex">
          <button
            type="button"
            className="btn btn-primary "
            onClick={() => {
              if (count > 0) setCount(count - 1);
            }}
          >
            -
          </button>
          <h5 className="mx-3">{count}</h5>
          <button
            type="button"
            className="btn btn-primary "
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default memo(UseStateCounter);
