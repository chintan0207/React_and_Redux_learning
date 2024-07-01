import React from 'react'
import "./AppleCounter.css"
import Button from './Button'
import AppleBasket from './AppleBasket'

import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#root'))


const totalApples = 10
let rightAppleCount = 0
let leftAppleCount = totalApples - rightAppleCount

const AppleCouter = () => {

  const leftClickHandler = () =>{
    rightAppleCount--
    leftAppleCount++
    root.render(<AppleCouter/>)
  }

  const rightClickHandler = () =>{
    leftAppleCount--
    rightAppleCount++
    root.render(<AppleCouter/>)
    // console.log(leftAppleCount,rightAppleCount)
    
  }

  return (
    <section>
      <AppleBasket appleCount={leftAppleCount} basketName="basket-1" />
      <Button clickHandler={leftClickHandler} imgName="fa-solid fa-arrow-left" arrowName="left-arrow" />
      <Button clickHandler={rightClickHandler} imgName="fa-solid fa-arrow-right" arrowName="right-arrow" />
      <AppleBasket appleCount={rightAppleCount} basketName="basket-2" />
    </section>
  )
}

export default AppleCouter