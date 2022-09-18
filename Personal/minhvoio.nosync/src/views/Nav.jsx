import React from 'react'
import '../css/nav.css'
import {GoHome} from 'react-icons/go'
import {AiOutlineUser} from 'react-icons/ai'
import {IoBookOutline} from 'react-icons/io5'
import {RiServiceLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="/#"
      onClick={() => setActiveNav('/#')}
      className={activeNav === '/#' ? 'active' : ''}><GoHome/>
      </a>
      
      <a href="#about"
      onClick={() => setActiveNav('#about')}
      className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/>
      </a>
      
      <a href="#experience"
      onClick={() => setActiveNav('#experience')}
      className={activeNav === '#experience' ? 'active' : ''}><IoBookOutline/>
      </a>
      
      <a href="#services"
      onClick={() => setActiveNav('#services')}
      className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/>
      </a>

      <a href="#contact"
      onClick={() => setActiveNav('#contact')}
      className={activeNav === '#contact' ? 'active' : ''}><BsWhatsapp/>
      </a>
    </nav>

  )
}

export default Nav