import React from 'react'

export default function Alert(props) {
  return (
    <>
    {props.alert && <div className='alert-box'>
     <p>{props.alert.msg}</p>
     </div>}
    </>
  )
}
