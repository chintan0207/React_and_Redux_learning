import React,{useEffect} from "react";
import "./ProjectDisp.css";
import gh from "../Images/github.png";
import link from "../Images/share.png";
import anim from "../Animations/Touch";

function ProjectDisp({
  Imagealine,
  Projectname,
  ProjectDisp,
  tech,
  github,
  Projectlink,
  poster,
}) {
    useEffect(() => {
      anim();
    }, [anim]);     
  return (
    <>
      {Imagealine == "left" ? (
        <div className="DispalyProjects hidden">
          <div className="PImageContainer">
            <img className="projectImage" src={poster} />
          </div>
          <div className="projectdetails">
            <span>Featured Project</span>
            <h4>{Projectname}</h4>
            <div className="DiscpContainer">
              <p>{ProjectDisp}</p>
            </div>
            <div className="LGContainer">
              {tech ? tech.map((tech) => <span className="techName">{tech}</span>) : null}
            </div>
            <div className="IconsContainer">
              <a href={github} target="_blank">
                {" "}
                <img className="Picons" src={gh} />
              </a>

              {Projectlink ?   <a href={Projectlink} target="_blank">
                {" "}
                <img className="Picons" src={link} />
              </a> : null }
           
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="DispalyProjects hidden">
            <div
              className="projectdetails"
              style={{ textAlign: "left", flexWrap: "wrap" }}
            >
              <span>Featured Project</span>
              <h4>{Projectname}</h4>
              <div className="DiscpContainer">
                <p style={{ textAlign: "left" }}>{ProjectDisp}</p>
              </div>
              <div
                className="LGContainer"
                style={{
                  alignItems: "flex-start",
                  paddingLeft: "0",
                  paddingRight: "10%",
                }}
              >
                {tech ? tech.map((tech) => <span className="techName">{tech}</span>) : null}
              </div>
              <div
                className="IconsContainer"
                style={{ justifyContent: "flex-start" }}
              >
                <a href={github} target="_blank">
                  {" "}
                  <img className="Picons" src={gh} />
                </a>
                <a href={Projectlink} target="_blank">
                  {" "}
                  <img className="Picons" src={link} />
                </a>
              </div>
            </div>
            <div className="PImageContainer">
              <img className="projectImage" src={poster} />
            </div>
          </div>
        </>
      )}

      <div className="ProductCrad2 hidden">
          {/* <img className="productImage" src={poster}></img> */}
          <div className="productDetails"
           style={{backgroundImage : `url(${poster})`}}
          >
         <div className="P2dtailCntiner">
          <span>Featured Project</span>
            <h4>{Projectname}</h4>
            <div className="ProductDiscpContainer">
              <p>{ProjectDisp}</p>
            </div>
            <div className="LGContainer">
              {tech ? tech.map((tech) => <span className="techName">{tech}</span>) : null}
            </div>
            <div className="IconsContainer">
              <a href={github} target="_blank">
                {" "}
                <img className="Picons" src={gh} />
              </a>
              { Projectlink ? <a href={Projectlink} target="_blank">
                {" "}
                <img className="Picons" src={link} />
              </a> : null }
             
            </div>
          </div>
          </div>
      </div>
    </>
  );
}

export default ProjectDisp;
