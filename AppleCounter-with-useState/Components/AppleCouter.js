import React, { useState } from 'react'
import "./AppleCounter.css"
import Button from './Button'
import AppleBasket from './AppleBasket'


const AppleCouter = () => {

const totalApples = 10
const [rightAppleCount, setRightAppleCount] = useState(0);
const [leftAppleCount, setLeftAppleCount] = useState(totalApples-rightAppleCount);


  const leftClickHandler = () =>{
    if(rightAppleCount > 0){
      setLeftAppleCount(leftAppleCount + 1)
      setRightAppleCount(rightAppleCount - 1)
    }
  }

  const rightClickHandler = () =>{
    if(leftAppleCount > 0){
      setLeftAppleCount(leftAppleCount - 1)
      setRightAppleCount(rightAppleCount + 1)
    }
    // console.log(leftAppleCount,rightAppleCount)
    
  }

  return (
    <section>
      <AppleBasket appleCount={leftAppleCount}  basketName="basket-1" />
      <Button clickHandler={leftClickHandler} imgName="fa-solid fa-arrow-left">
         left-arrow 
      </Button>
      <Button clickHandler={rightClickHandler} imgName="fa-solid fa-arrow-right" children="right-arrow" />
      <AppleBasket appleCount={rightAppleCount} basketName="basket-2" />
    </section>
  )
}

export default AppleCouter