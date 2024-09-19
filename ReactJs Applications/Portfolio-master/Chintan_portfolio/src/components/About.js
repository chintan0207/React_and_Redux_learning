import React, { useEffect } from "react";
import anim from "../Animations/Touch";
import photo from "../Images/pic3.jpg"

export default function About() {
    useEffect(() => {
        anim();
    }, []);
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
                            <span style={{ color: "#89BBFE" }}>Hello,</span> i'm Chintan Patel
                        </span>
                        <p className="about-disp hidden">
                            I enjoy creating things that live on the internet. When I decided to watch a video about web development in 2019, I became interested in the field. As it turned out, browsing YouTube taught me a lot about HTML,CSS & Javascript .
                        </p>
                        <p className="about-disp hidden">
                            Fast-forward to today, Some of <a className="highLight" href="#ProjectSection">my projects</a> are based on the MERN stack <a className="highLight" href="#skillSection">technology</a> and i also using Java-SpringBoot for back-end.
                        </p>
                        <p className="about-disp hidden">
                            I'm looking for an exciting challenging entry-level Opportunity.
                        </p>
                    </div>
                    <div className="aboutImageContainer hidden">
                        <img src={photo} alt="" />
                        <div className="">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
