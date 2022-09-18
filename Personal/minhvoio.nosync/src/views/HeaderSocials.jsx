import React from 'react'
import {BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>

      <a href="https://www.linkedin.com/in/minhvoio/"
      rel="noopener noreferrer" 
      target="_blank"><BsLinkedin/></a>

      <a href="https://github.com/minhvoio/"
      rel="noopener noreferrer" 
      target="_blank"><BsGithub/></a>

      <a href="https://www.facebook.com/minhvoio"
      rel="noopener noreferrer" 
      target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials