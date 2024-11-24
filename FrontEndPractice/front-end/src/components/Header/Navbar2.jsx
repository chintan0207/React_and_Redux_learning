import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar2 = () => {
  return (
    <div className="flex justify-between items-center h-[55px] w-full shadow-sm p-4">
      <ul className="flex items-center gap-5">
        <li className="relative flex items-center gap-1 group">
          <span>Accounting</span>
          <div>
            <MdKeyboardArrowDown className="text-2xl" />
          </div>
          <div className="box hidden absolute top-[25px] h-fit w-[230px] bg-white shadow group-hover:flex">
            <ul className="flex flex-col gap-4 p-5 pr-2">
              <li className="relative flex items-start justify-between gap-1 group1:">
                <span>Registration Service</span>
                <div>
                  <MdKeyboardArrowDown className="text-2xl" />
                </div>
                <div>
                  <span>Business Registration</span>
                  <span>Trademark Filing</span>
                  <span>Compliance Assistance</span>
                </div>
              </li>
              <li className="relative flex items-start justify-between gap-1">
                <span>Tax filling Service</span>
                <div>
                  <MdKeyboardArrowDown className="text-2xl" />
                </div>
              </li>
              <li className="relative flex items-start justify-between gap-1">
                <span>Accounting Service Plans</span>
                <div>
                  <MdKeyboardArrowDown className="text-2xl" />
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li className="relative group flex items-center gap-1 cursor-pointer">
          <span>Health & Fitness</span>
          <div>
            <MdKeyboardArrowDown className="text-2xl" />
          </div>
          <div className="box hidden absolute top-[25px] h-fit w-[230px] bg-white shadow group-hover:flex">
            <ul className="flex flex-col gap-4 p-5 pr-2">
              <li className="relative flex items-start justify-between gap-1">
                <span>Registration Service</span>
                <div>
                  <MdKeyboardArrowDown className="text-2xl" />
                </div>
              </li>
              <li className="relative flex items-start justify-between gap-1">
                <span>Tax filling Service</span>
                <div>
                  <MdKeyboardArrowDown className="text-2xl" />
                </div>
              </li>
              <li className="relative flex items-start justify-between gap-1">
                <span>Accounting Service Plans</span>
                <div>
                  <MdKeyboardArrowDown className="text-2xl" />
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li className="relative group flex items-center gap-1 cursor-pointer">
          <span>IT Software</span>
          <div>
            <MdKeyboardArrowDown className="text-2xl" />
          </div>
          <div className="box hidden absolute top-[25px] h-fit w-[230px] bg-white shadow group-hover:flex">
            <ul className="flex flex-col gap-4 p-5 pr-2">
              <li className="relative flex items-start justify-between gap-1">
                <span>Registration Service</span>
                <div>
                  <MdKeyboardArrowDown className="text-2xl" />
                </div>
              </li>
              <li className="relative flex items-start justify-between gap-1">
                <span>Tax filling Service</span>
                <div>
                  <MdKeyboardArrowDown className="text-2xl" />
                </div>
              </li>
              <li className="relative flex items-start justify-between gap-1">
                <span>Accounting Service Plans</span>
                <div>
                  <MdKeyboardArrowDown className="text-2xl" />
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li className="relative group flex items-center gap-1 cursor-pointer">
          <span>Photography</span>
          <div>
            <MdKeyboardArrowDown className="text-2xl" />
          </div>
          <div className="box hidden absolute top-[25px] h-fit w-[250px] bg-white shadow group-hover:flex">
            <ul className="flex flex-col gap-4 p-5 pr-2">
              <li className="relative flex items-start justify-between gap-1">
                <span>Registration Service</span>
                <div>
                  <MdKeyboardArrowDown className="text-2xl" />
                </div>
              </li>
              <li className="relative flex items-start justify-between gap-1">
                <span>Tax filling Service</span>
                <div>
                  <MdKeyboardArrowDown className="text-2xl" />
                </div>
              </li>
              <li className="relative flex items-start justify-between gap-1">
                <span className="">Accounting Service Plans & Photography</span>
                <div>
                  <div>
                    <MdKeyboardArrowDown className="text-2xl" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div>
        <span>services@servicenija.in</span>
      </div>
    </div>
  );
};

export default Navbar2;
