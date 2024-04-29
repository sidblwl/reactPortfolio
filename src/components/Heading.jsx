import React from 'react'
import '../App.css'

const stack = [
    {
        image: "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/html5-512.png",
    },
    {
        image: "https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png",
    },
    {
        image: "https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png"
    },
    {
        image: "https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png"
    },
    {
        image: "https://icon-library.com/images/react-icon/react-icon-29.jpg"
    },
    {
        image: "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"
    }
]

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
        {/* <h3 className="aboutBlurb">I'm a full stack web developer with 2 years of professional experience. I make frontends in ReactJS and connect the backend with MongoDB, FastAPI, and BaaS applications like Firebase and Strapi</h3> */}
        <h3 className="subline">Tech Stack</h3>
        <div className="stackWrapper">
            {stack.map((icon) => (
                <img className="icons" src={icon.image}></img>
            ))}
        </div>
        <h3 className="subline">Socials</h3>
        <div className="iconWrapper">
            {icons.map((icon) => (
                <a href={icon.link}><img className="icons" src={icon.image}></img></a>
            ))}
        </div>
    </>
  )
}