import React from 'react'
import './header.css'
import ActionButtons from './ActionButtons'
import HeaderSocials from './HeaderSocials'
import ME from './../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className="section__subtitle">Hello, I'm </h5>
        <h1 className="section__title"> Nutifafa Afi Attor </h1>
        <h5 className="section__subtitle text__light">Software Developer</h5>
        <ActionButtons />
        <HeaderSocials />

        <div className="header__image-container">
          <img src={ME} alt="" />
        </div>

        <a href="#about" className='scroll__down'>Scroll Down</a>


      </div>

    </header>
  )
}

export default Header