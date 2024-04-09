import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Navbar(){
  return(
    <div className="navbar">
      <h1>Siddharth Belwal</h1>
      <p>Home</p>
      <p>About</p>
      <p>Contact</p>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0)

  return(
    <>
      <span className="output">{count}</span>
      <div className="btnContainer">
        <button className="controlBtn" onclick={() => {setCount(7)}}>+</button>
        <button className="controlBtn" onclick={() => {setCount(3)}}>-</button>
        <button className="reset" onclick={() => {setCount(0)}}>Reset</button>
      </div>
    </>

  )
}

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Counter></Counter>
    </>
  )
}

export default App


