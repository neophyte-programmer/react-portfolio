import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { useState } from 'react' // importing useState Hook which will allow the detection of active nav link when clicked

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#') // It is going to be '#' by default

  return (
    <nav>
      {/* If the activeNav = # give it the active class else, give it nothing */}
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : '' } > 
        <AiOutlineHome />
      </a>
      {/* Changing the default link to the one which is being clicked then adding the active class  */}
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : '' } >
        <AiOutlineUser />
      </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : '' } >
        <BiBook />
      </a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : '' } >
        <RiServiceLine />
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : '' } >
        <BiMessageSquareDetail />
      </a>

   </nav>
  )
}

export default Nav