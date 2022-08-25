import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { GiMedal } from 'react-icons/gi'
import { BsPeople } from 'react-icons/bs'
import { BiLibrary } from 'react-icons/bi'

const About = () => {
  return (
    <section id="about" className='section '>
      <h5 className="section__subtitle">Get To Know</h5>
      <h2 className="section__title">About Me</h2>

      <div className="container about__container">
        <div className="about__image-container">
          <div className="about__img">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiMedal className="about__card-icon" />
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>

            <article className="about__card">
              <BsPeople className="about__card-icon" />
              <h5>Support</h5>
              <small> Online 24/7 </small>
            </article>
            
            <article className="about__card">
              <BiLibrary className="about__card-icon" />
              <h5>Projects</h5>
              <small> 20+ Completed </small>
            </article>

          </div>

          <p className="about__description">
          My name is Nutifafa Afi Attor. I am an 19 year old living in Accra, Ghana. I am currently an undergraduate student in the University of Ghana studying Information Technology. I like to solve problems using technology.
          </p>

          <a href="#contact" className="btn btn--primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About