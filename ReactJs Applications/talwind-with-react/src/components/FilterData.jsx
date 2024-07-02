/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useFilter } from "../CustomHooks/useFilter";
import { useLocalStorage } from "../CustomHooks/useLocalStorage";

const FilterData = () => {
  const Expenses = [
    {
      title: "T-shirt",
      category: "Clothes",
      amount: "600",
      id: "993d8812-34f2-4746-90a9-bbc56586dfe8",
    },

    {
      title: "pents",
      category: "Clothes",
      amount: "1150",
      id: "1fb42b68-9c5e-4651-86ea-6fd0a4cc55b7",
    },

    {
      title: "books",
      category: "Education",
      amount: "250",
      id: "8db13a8c-5bdc-438d-a524-e70372097ed8",
    },

    {
      title: "ballpens",
      category: "Education",
      amount: "50",
      id: "37ec2009-11f8-470c-acc4-9cc727c70ca6",
    },

    {
      title: "Light Bill",
      category: "Bills",
      amount: "1250",
      id: "cb007353-1905-432f-854f-b5df5ec788f5",
    },

    {
      title: "Fever",
      category: "Medicine",
      amount: "125",
      id: "fccf066e-da15-4063-b",
    },
  ];

  const [localData, setLocalData] = useLocalStorage("Expense", Expenses);

  //without custom hook
  //   const [query, setQuery] = useState("");
  //   const FilterDataArray = Expenses.filter((expense) => {
  //     return expense.category.toLowerCase().includes(query);
  //   });
  //   console.log(query, FilterDataArray);

  //using custom hook

  const [afterFilterData, setQuery] = useFilter(
    localData,
    (data) => data.category
  );
  //   console.log(afterFilterData);

  return (
    <>
      <div className="border rounded-md p-2 ">
        <h1 className="text-xl">FilterData in Array</h1>
        <select
          className="flex outline-none border rounded-md p-1"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        >
          <option value="">All</option>
          <option value="Clothes">Clothes</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
          <option value="Bills">Bills</option>
        </select>
        <div>
          <div className="my-2">
            <div className="flex justify-between border">
              <p>Title</p>
              <p>category</p>
              <p>Amount</p>
            </div>
            {afterFilterData.map((data, index) => {
              return (
                <div key={index} className="flex justify-between border">
                  <p>{data.title}</p>
                  <p>{data.category}</p>
                  <p>{data.amount}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterData;
