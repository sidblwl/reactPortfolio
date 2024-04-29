import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import '../App.css'

const msgTitles = [];
const msgContents = [];
  
export default function Message() {
    const [messages, setMessages] = useState({})

    const fetchMessages = async () => {
        const response = await fetch("http://127.0.0.1:8000/messages")
        const message = await response.json()
        setMessages(message)
        for (const key in messages) {
            if (messages.hasOwnProperty(key)) {
                msgTitles.push(key)
                msgContents.push(messages[key]);
            }
        }
    }

    useEffect(() => {
        fetchMessages()
    }, [])

    return (
        <>
            {msgTitles.map((msgName, i) => (
                <div className="messageCard">
                    <h1>{msgName}</h1>
                    <p>{msgContents[i]}</p>
                </div>
            ))}
        </>
    )
}