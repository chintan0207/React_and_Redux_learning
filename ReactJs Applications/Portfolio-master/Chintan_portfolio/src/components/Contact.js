/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";
import Platforms from "../Widgets/Platforms";
import github from "../Images/github.png";
import linkd from "../Images/ld.png";
import insta from "../Images/insta.png";
import anim from "../Animations/Touch";
import twitter from "../Images/twitter.png";

function Contact() {
  useEffect(() => {
    anim();
  }, []);
  return (
    <div
      className="maincontainer"
      id="ContactSection"
      style={{ background: "#13131A" }}
    >
      <div className="contactsContainer">
        <div className="contact_detail_container">
          <div className='titleContainer hidden'>
            <span className='tabNames'><span>05.</span>Contact Me</span>
            <div className='titleHrLine'></div>
          </div>

          <span className="GIT hidden"> Get In Touch </span>
          <p className="pggg hidden">
            {" "}
            Although I am currently new to the sector, based on my projects and
            talents, I would like to gain some industrial experience. I am
            delighted to begin a new chapter as a developer for the company.{" "}
          </p>
          <div className="platformContainer hidden">
            <a
              href="http://linkedin.com/in/chintan-chp"
              target="_blank"
            >
              <Platforms
                img={linkd}
                Platform="LinkedIn"
                color="rgb(46, 166, 86)"
              />
            </a>
            <a href="https://github.com/chintan0207" target="_blank">
              <Platforms img={github} Platform="GitHub" color="#ffb40082" />
            </a>
            <a href="https://twitter.com/imchintan0207" target="_blank">
              <Platforms img={twitter} Platform="Twitter" color="#0080ff82" />
            </a>
            <a
              href="https://www.instagram.com/chintan4696/"
              target="_blank"
            >
              {" "}
              <Platforms img={insta} Platform="Instagram" color="#db36cde1" />
            </a>
          </div>
          <a
            className="contactbtn hidden"
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCFSwzdLnpnJwPKNNCrczsmjxNvmvVQGFMvNsSwQVJbVBQLzghGBGMcSnjqFQMGHbsnCKg"
            target="_blank"
          >
            Say Hello
          </a>

          <span className="brandName hidden">Developed by</span>
          <span className="devloper hidden">Chintan</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
