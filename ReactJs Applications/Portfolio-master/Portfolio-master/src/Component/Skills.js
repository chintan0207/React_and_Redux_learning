import React from 'react'
import Skillcntr from '../Widgets/Skillcntr';


function Skills() {

  return (
    <>
    <div className='maincontainer'  id="skillSection">  
       <div className='scContainer'>
       <div className='titleContainer hidden'>
        <span className='tabNames'><span>03.</span>Technologies I've Work with</span>
            <div className='titleHrLine'></div>
      </div>    
       <Skillcntr skill="ReactJS" score="7" scale="70%" color="#1984c5"/>
       <Skillcntr skill="JavaScript" score="6" scale="60%" color="#ffb400"/>
       <Skillcntr skill="Java" score="6" scale="60%" color="#e14b31"/>
       <Skillcntr skill="Node JS" score="5" scale="50%" color="#599e94"/>
       <Skillcntr skill="Mongo Db" score="6" scale="60%" color= "#d7658b"/>
       <Skillcntr skill="Android Studio" score="4" scale="40%" color= "#b3bfd1"/>
       <Skillcntr skill="Flutter" score="5" scale="50%" color= "#0080ff"/>
       <Skillcntr skill="GitHub" score="7" scale="70%" color= "#DC143C"/>
       
       </div>
       </div>
   </>
  )
}

export default Skills