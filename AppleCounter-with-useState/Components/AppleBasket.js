import React from 'react'

const AppleBasket = ({appleCount,basketName}) => {
  return (
    <div className='apple-basket'>
    <h2 >
    <span>{appleCount} </span>
     Apples</h2>
     <p>{basketName}{appleCount === 10 && "(Full)"}{appleCount === 0 && '(Empty)'}{appleCount === 5 && "(half-full)"}</p>
    </div>
  )
}

export default AppleBasket