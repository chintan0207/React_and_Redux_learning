/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Acorrdion = ({ id, title, body }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="border-collapse">
      <div
        className=" title flex justify-between px-2  py-2 border-b border-t font-medium"
        onClick={handleClick}
      >
        <h1>{title}</h1>
        <div>
          {isOpen ? (
            <MdKeyboardArrowUp size={"24px"} />
          ) : (
            <MdOutlineKeyboardArrowDown size={"24px"} />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="abody px-2 py-2 overflow-hidden">
          {body}
          {body}
        </div>
      )}
    </div>
  );
};

export default Acorrdion;
