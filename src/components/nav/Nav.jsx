import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'

const Nav = () => {
  return (
    <nav>
      <a href="#" className='nav__link active'>
        <AiOutlineHome />
      </a>
      <a href="#about" className='nav__link'>
        <AiOutlineUser />
      </a>
      <a href="#experience" className='nav__link'>
        <BiBook />
      </a>
      <a href="#services" className='nav__link'>
        <RiServiceLine />
      </a>
      <a href="#contact" className='nav__link'>
        <BiMessageSquareDetail />
      </a>

   </nav>
  )
}

export default Nav