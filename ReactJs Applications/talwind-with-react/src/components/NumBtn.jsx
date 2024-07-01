import { useState } from "react";

/* eslint-disable react/prop-types */
const NumBtn = ({ item }) => {
  const [hide, setHide] = useState(false);

  return (
    <>
      <div>
        <button
          onClick={() => setHide(!hide)}
          className="p-2 h-10 rounded-md bg-blue-500 w-20 mx-1 "
        >
          <span
            className={`font-medium text-white ${hide ? "hidden" : "block"} `}
          >
            {item}
          </span>
        </button>
      </div>
    </>
  );
};

export default NumBtn;
