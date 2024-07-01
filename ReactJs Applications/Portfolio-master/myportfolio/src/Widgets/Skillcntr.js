import React,{useEffect} from "react";
import anim from '../Animations/Touch';
// import 'animate.css';

function Skillcntr({ skill, score, color, scale }) {
  useEffect(() => {
    anim()
  }, [anim()]);
  return (
    <div className="skillcard hidden">
      <span className="skillname">{skill}</span>
      <div className="indicatorContainer">
        <div className="indicator hidden">
          <div
           className="animate__animated animate__slideInLeft"
            style={{
              width: scale,
              height: "10px",
              backgroundColor: color,
              borderRadius: "5px",
              zIndex: "100",
            }}
          ></div>
        </div>
      </div>

      <span className="scoreContainer">{score}/10</span>
    </div>
  );
}

export default Skillcntr;
