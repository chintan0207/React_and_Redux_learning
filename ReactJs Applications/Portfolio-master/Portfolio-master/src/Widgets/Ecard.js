import React from 'react'

function Ecard({year,degree,clg,university,course,percentage}) {
  return (
    <div>
    <div className='BackeducationCard' >
        <div className="educationCard hidden" >
             <div className="HRline"></div>
             <div className='educationcontenConatiner hidden'>
               <h4>{year}</h4>
               <span className='Degree'>{degree}</span>
               <span className='clgName'>{clg}</span>
               <span className='universityName'>{university}</span>
               <span className='course'>{course}</span>
               <span className='cgpa'>{percentage}</span>
             </div>
           
        </div>

    </div>
    </div>
  )
}

export default Ecard