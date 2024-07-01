/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import anim from "../Animations/Touch";
import ProjectDisp from "../Widgets/ProjectDisp";
import inotebook from "../Images/iNotebook.png";
import cabposter from "../Images/Smart Cab Point.png"
import bookstore from "../Images/BookStoreApp.png"
import Card from "./Card";


function Projects() {
  useEffect(() => {
    anim();
  }, [anim]);
  return (
    <div className="productContainer" id="ProjectSection">
      <div className="titleContainer">
        <span className="tabNames hidden">
          <span>02.</span>Some things I've Built
        </span>
        <div className="titleHrLine"></div>
      </div>
      <ProjectDisp
        Imagealine="right"
        Projectname="iNotebook"
        ProjectDisp="iNotebook is a React Application for managing personal notes.This application allows users to register, store, and manage
        private notes on the cloud."
        tech={['ReactJS','NodeJS','MongoDb','MERN stack']}
        github= "https://github.com/chintan0207/inotebook"
        Projectlink="https://inotebook-chintan.netlify.app/"
        poster= {inotebook}
      />
      <ProjectDisp 
      Imagealine="right"
      Projectname="Smart Cab Point"
      ProjectDisp="Smart Cab Point application for taxi-booking.Users can fill out the booking form, book a cab, and add the
      trip to their cart on this online platform for booking taxis."
      tech={['ReactJS','NodeJS','MongoDb','MERN stack']}
      github= "https://github.com/chintan0207/smart_cab_reactapp"
      Projectlink="https://smart-cab-point-reactjs-chintan.netlify.app/" 
      poster={cabposter}
      />
       <ProjectDisp
        Imagealine="right"
        Projectname="Online book store"
        ProjectDisp="An online bookstore is an application where users may
        purchase books and the administrator can add, remove,
        update, and view the books."
        tech={["Java", "spring-boot", "Angular", "MySQL"]}
        github= "https://github.com/chintan0207/Online_BookStore_System"
        poster={bookstore}
      />


      <div className="OtherprojectContainer">
      <h1>Other Noteworthy Projects</h1>


      <div className="cardContainer">
        <Card
          name="ForText"
          disp="Fortext is a utility which can be used to manipulate your text in the way you want."
          tech={['ReactJs','Javascript']}
          github="https://github.com/chintan0207/ForText"
          Plink="https://fortext-chp.netlify.app/"
        />

        <Card
        name="Expense-Tracker"
        disp="An expense tracker facilitates the calculation of expenses for users and allows them to examine them by category by sorting"
        tech={["ReactJs", "JSX", "CSS"]}
        github="https://github.com/chintan0207/Expense-tracker"
        Plink = "https://expense-trackerchp.netlify.app/"
      />

      
      <Card
      name="Amazon UI"
      disp="Similar to amazon India's user interface and user experience design. It was created with HTML, CSS and Javascript login and signUp form Validation."
      tech={["HTML", "JavaScript", "CSS"]}
      github=""
      Plink = "https://amazon-subnavfeatures.netlify.app/"
    />


    <Card
    name="Artful-Corner"
    disp="Artful-Corner is responsive static website for Interier Design company using ReactJs"
    tech={["ReactJs", "JSX", "CSS"]}
    github="https://github.com/chintan0207/artful-corner"
    Plink = "https://artful-corner-interiar-design-studio.netlify.app/"
  />

       <Card
          name="Todo list"
          disp="ToDo list Website Using React JS and Local Storage For Storage And CRUD operations"
          tech={["ReactJS","JavaScript", "Bootstrap"]}
          github="https://github.com/chintan0207/To-Do"
          Plink="https://chp-todolist.netlify.app/"
        />

         <Card
          name="Calculator"
          disp="Calculator is web application Which can do simple calculation addition, subtraction, muiltiplication and division."
          tech={["HTML", "JavaScript", "CSS"]}
          github="https://github.com/chintan0207/OIDSIP-Level/tree/main/calculator"
          Plink="https://calchintan.netlify.app/"
        />

      </div>
      </div>
    </div>
  );
}

export default Projects;
