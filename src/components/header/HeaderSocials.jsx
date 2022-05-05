import React from 'react'
import {AiOutlineLinkedin, AiOutlineGithub, AiOutlineDribbble} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
      <div className='header__socials'>
          <a href="https://linkedin.com" target="_blank">
            <AiOutlineLinkedin className='header__social-icon'/>
          </a>
          <a href="https://github.com/neophyte-programmer" target="_blank">
            <AiOutlineGithub className='header__social-icon'/>
          </a>
          <a href="https://dribbble.com" target="_blank">
            <AiOutlineDribbble className='header__social-icon'/>
          </a>

      </div>
  )
}

export default HeaderSocials