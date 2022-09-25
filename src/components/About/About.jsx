import React from 'react'
import './About.css'
import ME from "../../asset/about.webp"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
           <div className='about_me_img'>
              <img src={ME} alt="me_img"/>
           </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1 Years Experience</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>10+ WorldWide</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>
          <p>
          I'm a designer and React js developer with 1 years experience working with designing and development Projects. For Designing am offering strong skills and experience in branding, Ui/Ux. As a developer i worked on number of web and mobile frontend Projects. With strong communication and problem solving skills i will be able to solve any problem within the time constraint . I can handle multiple tasks and can work in any environment. Other than this i have strong interest in photography.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About