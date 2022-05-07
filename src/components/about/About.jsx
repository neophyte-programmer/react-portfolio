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
              <small>3+ Years</small>
            </article>

            <article className="about__card">
              <BsPeople className="about__card-icon" />
              <h5>Clients</h5>
              <small> 200+ Worldwide </small>
            </article>
            
            <article className="about__card">
              <BiLibrary className="about__card-icon" />
              <h5>Projects</h5>
              <small> 80+ Completed </small>
            </article>

          </div>

          <p className="about__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sed sapiente, perferendis tempora atque, a modi, cum expedita sint optio laboriosam minus quod dolorem aut quam velit pariatur minima aspernatur!
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