import React from 'react'
import './Footer.css'
import {FaFacebookF} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {FaLinkedinIn} from "react-icons/fa"



const Footer = () => {
  return (
    <footer id="footer">
      <a href='#' className='footer_logo'>Ateeq</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='https://www.facebook.com/AteeqShareef12/' target=" _blank"><FaFacebookF/></a>
        <a href='https://www.instagram.com/i.ateeqhere/' target=" _blank"><FiInstagram/></a>
        <a href='https://www.linkedin.com/in/muhammad-ateeq-198b67222/' target=" _blank"><FaLinkedinIn/></a>
      </div>


      <div className='footer_copyright'>
        <small>&copy; ateeq shareef. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer