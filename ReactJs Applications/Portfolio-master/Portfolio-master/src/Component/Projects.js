import React, { useEffect } from "react";
import anim from "../Animations/Touch";
import Card from "./Card";
import ProjectDisp from "../Widgets/ProjectDisp";
import instaPoster from "../Images/instaPoster.png";
import philipkartPoster from "../Images/philipkartPoster.png"
import Expense from "../Images/ExPoster.png"

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
        Imagealine="left"
        Projectname="Instagram Clone"
        ProjectDisp="A social media web app that is an Instagram clone. where users can register, publish, and follow one another like Instagram."
        tech={['ReactJS','NodeJS','MongoDb','MERN stack']}
        github= "https://github.com/Spark-Things/Instaclone"
        Projectlink="https://instagramclone-082n.onrender.com/"
        poster= {instaPoster}
      />
      <ProjectDisp 
      Imagealine="right"
      Projectname="Philipkart"
      ProjectDisp="It is a fully functional online shop. where a user can explore items, put them in their shopping basket, and then check out. It fetches user item list and accepts payments."
      tech={['ReactJS','Strapi','Stripe','MERN stack']}
      github= "https://github.com/Spark-Things/new-philipkart"
      Projectlink="https://philipkart.onrender.com/" 
      poster={philipkartPoster}
      />
       <ProjectDisp
        Imagealine="left"
        Projectname="Expense Tracker"
        ProjectDisp="Expense Tracker stores the daily used items added by the user, tracks their total expenses, and determines the list of expenses."
        tech={['Android Studio','Java','Firebase']}
        github= "https://github.com/Spark-Things/ExpenseTracker"
        poster={Expense}
      />


      <div className="OtherprojectContainer">
      <h1>Other Noteworthy Projects</h1>


      <div className="cardContainer">
        <Card
          name="Marvelix"
          disp="Marvelix is a Flutter application that streams high-quality Marvel movies and television shows after retrieving API data."
          tech={['Flutter','API']}
          github="https://github.com/Spark-Things/Marvelix"
          Plink=""
        />

        <Card
          name="Tic-Tac-Toe"
          disp="It is a multiplayer game created for Fun with Friends using the Flutter technology. that offers a platform for the game Tic Tac Toe"
          tech={['Flutter']}
          github="https://github.com/Spark-Things/tic_tac_toe"
          Plink=""
        />
       <Card
          name="Todo list"
          disp="ToDo list Website Using React JS and Local Storage For Storage And CRUD operations"
          tech={["ReactJS","Redux","JavaScript", "Bootstrap"]}
          github="https://github.com/Spark-Things/Todo-List"
          Plink="https://sparkstodolist.netlify.app"
        />

        <Card
          name="MusicX"
          disp="It is an Android application that plays music from the device's local storage and operates like a music player."
          tech={["Android Studio","JAVA"]}
          github="https://github.com/Spark-Things/MusicX"
        />
         <Card
          name="Quotes.io"
          disp="It is a website that shows quotations obtained from an API and lets users copy them."
          tech={["ReactJS", "API", "CSS"]}
          github="https://github.com/Spark-Things/Quotes.io"
          Plink="https://spark-things.github.io/Quotes.io/"
        />

        <Card
          name="Samsung.in"
          disp="similar to Samsung India's user interface and user experience design. It was created with ReactJS, CSS, and JSX."
          tech={["reactJS", "JavaScript", "CSS"]}
          github="https://github.com/Spark-Things/Samsung-india"
          Plink = "https://samsungindia.netlify.app/"
        />
        {/* <Card
          name="Traveller"
          disp="Travelling Landscape info website using React js"
          tech={["reactJS", "NodeJs", "MongoDB"]}
          icon={github}
          link2="https://github.com/Spark-Things/Traveller"
        />

        <Card
          name="Traveller"
          disp="Travelling Landscape info website using React js"
          tech={["reactJS", "NodeJs", "MongoDB"]}
          icon={github}
          link2="https://github.com/Spark-Things/Traveller"
        /> */}
      </div>
      </div>
    </div>
  );
}

export default Projects;
