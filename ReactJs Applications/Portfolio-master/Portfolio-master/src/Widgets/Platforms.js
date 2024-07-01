import React, { useEffect } from "react";
import anim from "../Animations/Touch";

export default function Platforms({ img, Platform, color }) {
  useEffect(() => {
    anim();
  }, [anim]);
  return (
    <div
      className="platfromTab hidden"
      style={{ border: `${color} 2px solid`,
      boxShadow : `1px 5px 40px 4px ${color}`
    
    }}
    >
      <img className="platformIconImage" src={img} />
    </div>
  );
}
