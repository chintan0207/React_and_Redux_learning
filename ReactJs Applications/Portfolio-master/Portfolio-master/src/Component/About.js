import React, { useEffect } from "react";
import anim from "../Animations/Touch";
import photu from "../Images/smit.jpg"
function About() {
  useEffect(() => {
    anim();
  }, [anim]);
  return (
    <div className="maincontainer " id="AboutMeSection"
      style={{
        "background": "linear-gradient(to top, #13131A 0%, #182848 100%)"
      }}
     >
       <div className="aboutContainer">
       <div className='titleContainer hidden'>
        <span className='tabNames'><span>01.</span>About Me</span>
            <div className='titleHrLine'></div>
      </div>    
       <div className="mainAboutConatiner">
            <div className="aboutII hidden">
              <span className="about_info hidden">
              <span style={{ color: "#89BBFE" }}>Namaste,</span> i'm Smit Patel
              </span>
              <p className="about-disp hidden">
              I enjoy creating things that live on the internet. When I decided to watch a video about web development in 2019, I became interested in the field. As it turned out, browsing YouTube taught me a lot about HTML,CSS & Javascript .
              </p>
              <p className="about-disp hidden">
              Fast-forward to today, Some of <a className="highLight" href="#ProjectSection">my projects</a> are based on the MERN stack <a className="highLight" href="#skillSection">technology</a> and slitly i am now using Flutter for developing web Apps
              </p>
              <p className="about-disp hidden">
              Sometimes I feel stuck in loop and then i grab my bike's key and go somewhere to feel like I'm living in the real world.
              </p>
            </div>
             <div className="aboutImageContainer hidden">
               <img src={photu}/>
               <div className="">
                
               </div>
              </div>  
       </div>
       </div>
    </div>
  );
}

export default About;
