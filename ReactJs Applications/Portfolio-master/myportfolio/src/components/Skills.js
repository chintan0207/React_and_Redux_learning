import React from 'react'
import Skillcntr from '../Widgets/Skillcntr'

export default function Skills() {
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
       <Skillcntr skill="Mongo Db" score="5" scale="50%" color= "#d7658b"/>
       <Skillcntr skill="MySQL" score="6" scale="60%" color= "rgb(50 225 57)"/>
       <Skillcntr skill="SpringBoot" score="5" scale="50%" color= "#9C27B0"/>
       <Skillcntr skill="AngularJs" score="5" scale="50%" color= "#e8d317"/>
       <Skillcntr skill="GitHub" score="6" scale="60%" color= "#DC143C"/>

       
       </div>
       </div>
    </>
  )
}
