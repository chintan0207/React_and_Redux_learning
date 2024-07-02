import React, { useState, useMemo } from "react";

const Memo = () => {
  const [myNum, setMyNum] = useState(0);
  const [show, setShow] = useState(false);

  const getValue = () => {
    return setMyNum(myNum + 1);
  };

  const countNumber = (num) => {
    console.log("computing...", num);
    for (let i = 0; i <= 1000000000; i++) {}
    return num;
  };

  // subscribe to thapa technical

  const checkData = useMemo(() => {
    return countNumber(myNum);
  }, [myNum]);

  //   const checkData = countNumber(myNum);

  return (
    <div className="card p-3">
      <button className="btn btn-primary" onClick={getValue}>
        Counter
      </button>
      <p> My new number : {checkData} </p>
      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        {show ? "You clicked me" : "Click me plz"}
      </button>
    </div>
  );
};

export default Memo;
