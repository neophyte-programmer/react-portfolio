import React from 'react'
import './contact.css'
import { BsEnvelope, BsWhatsapp } from 'react-icons/bs'
import { RiMessengerLine } from 'react-icons/ri'

const Contact = () => {
  return (
    <section id="contact" className='section'>
      <h5 className="section__subtitle">Get In Touch </h5>
      <h2 className="section__title">Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BsEnvelope className="contact__icon" />
            <h4 className="contact__title">Email</h4>
            <h5 className="contact__handle">nutifafa@lorem.com</h5>
            <a href="mailto:attorfafa@gmail.com" className="contact__link">Send a message</a> 
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__icon" />
            <h4 className="contact__title">Messenger</h4>
            <h5 className="contact__handle">random_handle</h5>
            <a href="https://facebook.com" className="contact__link">Send a message</a> 
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__icon" />
            <h4 className="contact__title">Whatsapp</h4>
            <h5 className="contact__handle">123-456-7890</h5>
            <a href="https://api.whatsapp.com/send?phone=+233502297337" className="contact__link">Send a message</a> 
          </article>

        </div>

        <form action="">
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="name" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn--primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact