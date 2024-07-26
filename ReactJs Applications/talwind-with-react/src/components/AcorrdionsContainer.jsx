/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Acorrdion from "./Acorrdion";

const AcorrdionsContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const res = await result.json();
        setData(res);
        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="border-collapse border m-1 rounded-md">
      {data.slice(0, 5).map((ele) => {
        return (
          <Acorrdion
            key={ele.id}
            id={ele.id}
            title={ele.title}
            body={ele.body}
          />
        );
      })}
    </div>
  );
};

export default AcorrdionsContainer;
