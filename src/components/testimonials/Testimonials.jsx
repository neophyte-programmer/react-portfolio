import React from 'react'
import './testimonials.css'
import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'
import avatar4 from '../../assets/avatar4.jpg'

const Testimonials = () => {
  return <section id='testimonials' className='section'>
    <h5 className="section__subtitle">What People Say</h5>
    <h2 className="section__title">My Testimonials</h2>

    <div className="container testimonials__container">
      <article className="testimonial">
        <div className="client__avatar">
          <img src={avatar1} alt="" />
          <h5 className="client__name">Samuella Smith</h5>
          <small className="client__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam impedit rem modi illum tenetur totam in earum deserunt illo?
          </small>
        </div>
      </article>
      <article className="testimonial">
        <div className="client__avatar">
          <img src={avatar1} alt="" />
          <h5 className="client__name">Samuella Smith</h5>
          <small className="client__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam impedit rem modi illum tenetur totam in earum deserunt illo?
          </small>
        </div>
      </article>
      <article className="testimonial">
        <div className="client__avatar">
          <img src={avatar1} alt="" />
          <h5 className="client__name">Samuella Smith</h5>
          <small className="client__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam impedit rem modi illum tenetur totam in earum deserunt illo?
          </small>
        </div>
      </article>
    </div>
  </section>
}

export default Testimonials
