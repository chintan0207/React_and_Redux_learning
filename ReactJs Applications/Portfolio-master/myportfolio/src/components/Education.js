import React, { useEffect } from "react";
import anim from "../Animations/Touch";
import dev2 from "../Images/dev.gif";
import Ecard from "../Widgets/Ecard";

function Education() {
  useEffect(() => {
    anim();
  }, [anim]);
  return (
    <div
      className="maincontainer"
      id="EductaionSection"
      style={{
        background: "linear-gradient(to top, #13131A 0%, #182848 100%)",
      }}
    >
      <div className="educationSecContainer">
        <div className="titleContainer hidden">
          <span className="tabNames">
            <span>04.</span>Education
          </span>
          <div className="titleHrLine"></div>
        </div>
        {/* <div className="educationtabs hidden">
          <div className="upertab">
            <h4 className="Eyeard">2019 - 2023</h4>
            <p className="Eyear">Bechlor of Engineering</p>
          </div>
          <div className="vrLine"></div>
          <div className="lowerTab">
            <span style={{ color: "rgb(186, 230, 255)", fontSize: "15px" }}>
              Information technology
            </span>
            <span className="Institute">
              Sardar Vallabhbhai Patel Institute Of Technology-Vasad
            </span>
            <span style={{ color: "#FFEEDD", fontSize: "12px" }}>
              CGPA - 8.02
            </span>
          </div>
        </div>
        <div className="educationtabs hidden">
          <div className="upertab">
            <h4 className="Eyeard">2018 - 2019</h4>
            <p className="Eyear">Higher Secondary</p>
          </div>
          <div className="vrLine"></div>
          <div className="lowerTab">
            <span className="Institute">NS vidhyalaya</span>
            <span style={{ color: "#FFEEDD", fontSize: "12px" }}>
              Percentage - 68%
            </span>
          </div>
        </div>
        <div className="educationtabs hidden">
          <div className="upertab">
            <h4 className="Eyeard">2016 - 2017</h4>
            <p className="Eyear">Secondary</p>
          </div>
          <div className="vrLine"></div>
          <div className="lowerTab">
            <span className="Institute">AB school</span>
            <span
              className="result"
              style={{ color: "#FFEEDD", fontSize: "12px" }}
            >
              Percentage - 87.33%
            </span>
          </div>
        </div> */}
        <div className="educationaCradContainer">
          <Ecard
            year="2019-2023"
            degree="Bachlore of Engineering"
            clg="Dr. Jivraj Mehta Institute of Technology,Anand"
            university="Gujarat Technical University"
            course= "Information Technology"
            percentage= "8.77"
          />
          <Ecard
            year="2018 - 2019"
            degree="Higher Secondary"
            clg="NS vidhyalaya,Chikhli"
            university="Gujarat Secondry & Higher Secondry Education Board"
            course= "Science"
            percentage= "78%"
          />
          <Ecard
            year="2016 - 2017"
            degree="Secondary"
            clg="The D.E. Italia Highschool,Chikhli"
            university="Gujarat Secondry & Higher Secondry Education Board"
            course= "SSC"
            percentage= "84%"
          />
        </div>
      </div>
      {/* <img src={dev2} className="EgifImage"></img> */}
    </div>
  );
}

export default Education;
