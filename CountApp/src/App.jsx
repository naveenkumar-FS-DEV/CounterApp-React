import React from 'react'
import { useState } from 'react'
import './App.css'

export default function App() {
let [count,setCount] = useState(0);


  return (
    <div>
      <div className="container">
        <h1>{count}</h1>
        <div className="btns">        
        <button onClick={() =>{setCount(count + 1)}}>+</button>
        <br />
        <button onClick={() =>{setCount(0)}}>RESET</button>
        <br />
        <button onClick={() =>{setCount(count - 1)}}>-</button>
        </div>
      </div>
    </div>
  )
}
