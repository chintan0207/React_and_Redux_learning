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
  }, [anim]);
  return (
    <div
      className="maincontainer"
      id="ContactSection"
      style={{ background: "#13131A" }}
    >
      <div className="contactsContainer">
        <div className="contact_detail_container">
          <span className="hidden" style={{ fontSize: "1.8rem" }}>
            05.What's Next?
          </span>
          <span className="GIT hidden"> Get In Touch </span>
          <p className="pggg hidden">
            {" "}
            Although I am currently new to the sector, based on my projects and
            talents, I would like to gain some industrial experience. I am
            delighted to begin a new chapter as a developer for the company.{" "}
          </p>
          <div className="platformContainer hidden">
            <a
              href="https://www.linkedin.com/in/smit-patel-742869194/"
              target="_blank"
            >
              <Platforms
                img={linkd}
                Platform="LinkedIn"
                color="rgb(46, 166, 86)"
              />
            </a>
            <a href="https://github.com/Spark-Things" target="_blank">
              <Platforms img={github} Platform="GitHub" color="#ffb40082" />
            </a>
            <a href="https://twitter.com/SmitPat50356737" target="_blank">
              <Platforms img={twitter} Platform="Twitter" color="#0080ff82" />
            </a>
            <a
              href="https://www.instagram.com/make.it__spark/?igshid=YzAyZWRlMzg="
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
          <span className="devloper hidden">Spark</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
