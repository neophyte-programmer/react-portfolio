import React from 'react'
import {AiOutlineLinkedin, AiOutlineGithub, AiOutlineTwitter} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
      <div className='header__socials'>
          <a href="https://linkedin.com/in/neophyteprogrammer" target="_blank">
            <AiOutlineLinkedin className='header__social-icon'/>
          </a>
          <a href="https://github.com/neophyte-programmer" target="_blank">
            <AiOutlineGithub className='header__social-icon'/>
          </a>
          <a href="https://twitter.com/Nutifafa18" target="_blank">
            <AiOutlineTwitter className='header__social-icon'/>
          </a>

      </div>
  )
}

export default HeaderSocials