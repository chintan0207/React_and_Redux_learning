import { useState } from "react"
import styles from "./counter.module.css"

const Counter = ({userName}) => {
    const [count, setCount] = useState(userName.length);
    const [name, setName] = useState(userName); 
    console.log(styles);
    const handleClick = () =>{
        setCount((preCount) => preCount-1)
        // setCount((preCount) => preCount+1)
        setName((preName) => {
         const name = preName.slice(0,preName.length - 1)
         return name;
        })
    }
  return (
    <div className={[styles.buttonColor,"counter"].join(" ")}>
       <h1>{count}</h1>
       <h2>{name}</h2>
       <button className={styles.buttonBg} onClick={handleClick}>Change the State</button>
    </div>
  )
}

export default Counter