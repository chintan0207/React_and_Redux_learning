import React, { useEffect } from "react";
import anim from "../Animations/Touch";
import gh from "../Images/github.png";
import insta from "../Images/insta.png";
import cc from "../Images/CC.png";
import ld from "../Images/ld.png";
import twitter from "../Images/twitter.png";
import dev3 from "../Images/dev3.gif";
function Homepage() {
  useEffect(() => {
    anim();
  }, [anim]);

  //  LINK -- https://brittanychiang.com/
  return (
    <div className="maincontainer" id="Home" style={{"paddingTop":"10%"}}>
      <div
        className="contents animate__animated animate__fadeIn"
        style={{ animationDelay: "2s" }}
      >
        <a href="https://github.com/Spark-Things" target="_blank">
          <img src={gh} className="icons" />
        </a>
        <a
          href="https://www.instagram.com/make.it__spark/?igshid=YzAyZWRlMzg="
          target="_blank"
        >
          <img src={insta} className="icons" />
        </a>
        <a href="https://twitter.com/SmitPat50356737" target="_blank">
          <img src={twitter} className="icons" />
        </a>
        <a href="https://www.linkedin.com/in/linkedsmitpatel/" target="_blank">
          <img src={ld} className="icons" />
        </a>
        <a href="https://leetcode.com/Spark-codes/" target="_blank">
          <img src={cc} className="icons" />
        </a>
        <div className="Homevrline"></div>
      </div>
      <div
        className="contentsRight animate__animated animate__fadeIn"
        style={{ animationDelay: "2s" }}
      >
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCFSwzdLnpnJwPKNNCrczsmjxNvmvVQGFMvNsSwQVJbVBQLzghGBGMcSnjqFQMGHbsnCKg" target="_blank">
          <span className="email">smit17786@gmail.com</span>
        </a>
        <div className="Homevrline"></div>
      </div>
      <div className="contectContainer">
        <span
          className="title animate__animated animate__fadeInUp"
          style={{ animationDelay: "1.1s" }}
        >
          <span>Namaste, </span>My name is
        </span>
        <span
          className="name animate__animated animate__fadeInUp"
          style={{ animationDelay: "1.2s" }}
        >
          Smit Patel.
        </span>
        <span
          className="job animate__animated animate__fadeInUp"
          style={{ animationDelay: "1.3s" }}
        >
          I build things for the web.
        </span>
        <p
          className="personal_info animate__animated animate__fadeInUp"
          style={{ animationDelay: "1.4s" }}
        >
          I'm a software engineer who specialises in producing top-notch digital
          experiences. Right now, I'm focusing on creating responsive websites.
        </p>
        <a
          className="view_work animate__animated animate__fadeInUp"
          href="#ProjectSection"
          style={{ animationDelay: "1.5s" }}
        >
          Check out my work !
        </a>
      </div>
      <div
        className="GIFcontainer animate__animated animate__fadeIn"
        style={{ animationDelay: "1.7s" }}
      >
        <img
        className="mainImage"
          src={dev3}
         
        />
      </div>
    </div>
  );
}

export default Homepage;
