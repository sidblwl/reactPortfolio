import { useState } from 'react'
import './App.css'
import Projects from './components/Projects.jsx'
import Heading from './components/Heading.jsx'
import Message from './components/Message.jsx'

async function getMessages(){
  const response = await fetch("http://127.0.0.1:8000/messages"); //response returns an intermediate request from the server
  const items = response.json();  //then we take that intermediate repsonse and request the json from it
  return items;
}

const messages = await getMessages();

function Navbar(){
  return(
    <div className="navbar">
      <p>Home</p>
      <p>Projects</p>
      <p>Contact</p>
    </div>
  )
}

function App() {
  return (
    <>
      <div className="splash">
        <Navbar></Navbar>
        <Heading></Heading>
      </div>
      <div className="projectSection">
        <Projects></Projects>
      </div>
      <div className="contactSection">
        <h1>Messages</h1>
        <Message></Message>
      </div>
    </>
  )
}

export default App


