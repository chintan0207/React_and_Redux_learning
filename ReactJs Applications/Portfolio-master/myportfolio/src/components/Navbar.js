/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react'
import menu from "../Images/menu.png";
import close from "../Images/close.png";

export default function Navbar() {
  const [Open, setOpen] = useState(false);

  return (
    <>
    <div className="navbar animate__animated animate__fadeIn">
    <a href="#Home" className="logo animate__animated animate__backInDown">Chp</a>
    <div className="right_nav">
      <a
        href="#AboutMeSection"
        className="animate__animated animate__backInDown"
        style={{ animationDelay: "50ms" }}
      >
        <span className="nums">01.</span>About
      </a>
      <a
        href="#ProjectSection"
        className="animate__animated animate__backInDown"
        style={{ animationDelay: "100ms" }}
      >
        <span className="nums">02.</span>Projects
      </a>
      <a
        href="#skillSection"
        className="animate__animated animate__backInDown"
        style={{ animationDelay: "150ms" }}
      >
        <span className="nums">03.</span>Skills
      </a>
      <a
        href="#EductaionSection"
        className="animate__animated animate__backInDown"
        style={{ animationDelay: "200ms" }}
      >
        <span className="nums">04.</span>Education
      </a>
      <a
        href="#ContactSection"
        className="animate__animated animate__backInDown"
        style={{ animationDelay: "250ms" }}
      >
        <span className="nums">05.</span>Contact
      </a>
      <a
        href="https://drive.google.com/file/d/16xdij_WLg-sOqIbE9BUGh68MayceSG8x/view?usp=sharing"
        className="resumeBtn animate__animated animate__backInDown"
        target="_blank"
        style={{ animationDelay: "300ms" }}
      >
        RESUME
      </a>
    </div>
    <button
      className="toggleBtn animate__animated animate__backInDown"
      onClick={() => setOpen(!Open)}
    >
      <img
        src={menu}
        style={{
          width: "30px",
          height: "30px",
          objectFit: "cover",
          alignItems: "center",
        }}
      />
    </button>
  </div>
  <div
  className="sidebar"
  style={Open ? { display: "block" } : { display: "none" }}
>
  <div className="tabPanel animate__animated animate__slideInUp">
    <button onClick={() => setOpen(false)} className="closeBtn">
      <img
        src={close}
        style={{ width: "20px", height: "20px", objectFit: "cover" }}
      />
    </button>
    <a
      href="#AboutMeSection"
      onClick={() => setOpen(false)}
      className="animate__animated animate__slideInUp"
    >
      About
    </a>
    <a
      href="#ProjectSection"
      onClick={() => setOpen(false)}
      className="animate__animated animate__slideInUp"
      style={{ animationDelay: "50ms" }}
    >
      Projects
    </a>
    <a
      href="#skillSection"
      onClick={() => setOpen(false)}
      className="animate__animated animate__slideInUp"
      style={{ animationDelay: "100ms" }}
    >
      Skills
    </a>
    <a
      href="#EductaionSection"
      onClick={() => setOpen(false)}
      className="animate__animated animate__slideInUp"
      style={{ animationDelay: "150ms" }}
    >
      Education
    </a>
    <a
      href="#ContactSection"
      onClick={() => setOpen(false)}
      className="animate__animated animate__slideInUp"
      style={{ animationDelay: "200ms" }}
    >
      Contact
    </a>
    <a
      href="https://drive.google.com/file/d/16xdij_WLg-sOqIbE9BUGh68MayceSG8x/view?usp=sharing"
      className="resumeBtn2  animate__animated animate__slideInUp"
      style={{ animationDelay: "250ms" }}
      target="_blank"
      onClick={() => setOpen(false)}
    >
      RESUME
    </a>
  </div>
</div>
    </>
  )
}
