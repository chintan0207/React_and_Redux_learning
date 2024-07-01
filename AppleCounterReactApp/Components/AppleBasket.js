import React from 'react'

const AppleBasket = ({appleCount,basketName}) => {
  return (
    <div className='apple-basket'>
    <h2>
    <span>{appleCount} </span>
     Apples</h2>
     <p>{basketName}</p>
    </div>
  )
}

export default AppleBasket