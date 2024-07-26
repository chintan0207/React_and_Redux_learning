/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import React,{useState} from 'react'
import './Card.css'
import Folder from '../Images/Folder.png'
import git from '../Images/github.png'
import link from '../Images/share.png'
function Card({name,disp,tech,github,Plink}) {
  return (
    <div id='card'className='hidden'>  
       <div className='container'>
          <div className='upperpart'>
              <a href={Plink ? Plink : github} target="_blank"><img className='Cardicon' src={Folder}></img></a>
              <div style={{width:"100%",alignItems:"flex-end",display:"flex",flexDirection:"row-reverse"}}>
                    {Plink ? <a href={Plink} target="_blank"><img className='Picons'src={link}/></a> : null} 
                    {github ?<a href={github} target="_blank"><img className='Picons'src={git}/></a> : null}
              </div>
          </div>
          <div className='CradDeatailConatiner'>
          <a className='projectName' href={Plink ? Plink : github} target="_blank">{name}</a>
          <p className='projectDisp'>{disp}</p>
          <div className='techContainer'>
            {
               tech.map((item) => <span className='techUsed'>{item}</span> )
            }
          </div>
          </div>
       </div>
    </div>
  )
}

export default Card