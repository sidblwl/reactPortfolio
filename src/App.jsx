import { useState } from 'react'
import './App.css'
import Projects from './components/Projects.jsx'
import Heading from './components/Heading.jsx'

function Navbar(){
  return(
    <div className="navbar">
      <p>Home</p>
      <p>About</p>
      <p>Contact</p>
    </div>
  )
}

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Heading></Heading>
      <Projects></Projects>
    </>
  )
}

export default App


