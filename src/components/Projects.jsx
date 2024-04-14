import React from 'react'
import '../App.css'

const links = ["https://umd-homecoming.transforms.svdcdn.com/production/images/testudo-open-arms.jpg?w=1200&h=1080&auto=compress%2Cformat&fit=crop&dm=1692894314&s=c274330f990f19a7760cb2bee322e5d8","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsidkTDKrHJi0C1qzh6Dg92LAVury6eP-C1EcSgHNCyA&s", "https://live.staticflickr.com/4524/24406638418_bd62b30418_z.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHswHBCTKyIMXUrY_bE_p7KtXO5ZjVaeFZPOs4CjjRNtQqhPOOtPDoFSb-xcBBE95uQbU&usqp=CAU", "https://c8.alamy.com/comp/2NKPHMW/college-park-md-february-21-the-maryland-terrapins-mascot-testudo-jumps-in-the-air-prior-to-the-penn-state-nittany-lions-game-versus-the-maryland-terrapins-on-february-21-2022-at-xfinity-center-in-college-park-md-photo-by-mark-goldmanicon-sportswire-icon-sportswire-via-ap-images-2NKPHMW.jpg", "https://i.pinimg.com/originals/81/0c/6e/810c6e85cb6962a0f6f3c465610ab48a.jpg"]

const projects = [
  {
    title: "Album Cover Collage Generator",
    subtitle: "Spotify API webapp to generate collages of your favorite albums",
    image: links[0],
    link: "https://www.imdb.com/title/tt0298148/"
  },
  {
    title: "RASA Sweets Wesbite",
    subtitle: "Full stack ecommerce site using ReactJS for catering business",
    image: links[1],
    link: "https://www.imdb.com/title/tt0298148/"
  },
  {
    title: "8 bit Portfolio",
    subtitle: "Portfolio site inspired by 80s arcade games",
    image: links[2],
    link: "https://www.imdb.com/title/tt0298148/"
  },
  {
    title: "Micky Soju House Website",
    subtitle: "Website for a soju house and KBBQ place",
    image: links[3],
    link: "https://www.imdb.com/title/tt0298148/"
  },
  {
    title: "Baking Site",
    subtitle: "Full stack ecommerce site for baking business",
    image: links[4],
    link: "https://www.imdb.com/title/tt0298148/"
  },
  {
    title: "SaaS Chatbot",
    subtitle: "Full stack ecommerce site for baking business",
    image: links[5],
    link: "https://www.imdb.com/title/tt0298148/"
  },
]

function ProjectSlide({proj}){
    return(
      <div>
        <h3>{proj.title}</h3>
        <a href={proj.link}><img className="projectCovers" src={proj.image}></img></a>
        <p>{proj.subtitle}</p>
      </div>
    )
  }

export default function Projects(){
    return(
      <>
        <div className="projects">
          {projects.map((project) => (
            <ProjectSlide proj={project}></ProjectSlide>
          ))}
        </div>
      </>
    )
}