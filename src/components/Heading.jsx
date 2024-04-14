import React from 'react'
import '../App.css'

const icons = [
    {
        image: "https://cdn1.iconfinder.com/data/icons/logotypes/32/github-1024.png",
        link: "https://github.com/sidblwl"
    },
    {
        image: "https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-1024.png",
        link: "https://linkedin.com/siddharthbelwal"
    }
]

export default function Heading(){
  return (
    <>
        <h1 className="name">Siddharth Belwal</h1>
        <h3>Full Stack Web Developer</h3>
        <div className="iconWrapper">
            {icons.map((icon) => (
                <a href={icon.link}><img className="icons" src={icon.image}></img></a>
            ))}
        </div>
    </>
  )
}