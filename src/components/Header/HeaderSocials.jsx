import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FaDribbble} from "react-icons/fa"


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/muhammad-ateeq-198b67222/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/AteeqShareef11' target="_blank"><FaGithub/></a>
        <a href='https://dribbble.com' target="_blank"><FaDribbble/></a>
    </div>
  )
}

export default HeaderSocials