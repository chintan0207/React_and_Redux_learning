/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const InDeBtn = ({ item }) => {
  const [originalValue, setOriginalValue] = useState(item);
  const [value, setValue] = useState();
  const [TF, setTF] = useState(true);

  useEffect(() => {
    setValue(item);
    setOriginalValue(item);
  }, [item]);

  const handlePlusMinus = () => {
    if (TF) {
      setValue(originalValue + 1);
    } else {
      setValue(originalValue - 1);
    }
    setTF(!TF);
  };
  return (
    <div>
      <button
        onClick={handlePlusMinus}
        className={`p-2 h-10 rounded-md bg-cc1 w-20 mx-1 `}
      >
        <span className="font-medium text-white">{value}</span>
      </button>
    </div>
  );
};

export default InDeBtn;
