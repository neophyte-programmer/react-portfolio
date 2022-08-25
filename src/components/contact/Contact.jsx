import React from 'react'
import './contact.css'
import { BsEnvelope, BsWhatsapp, BsTelegram } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zcpdjf2', 'template_jkkuiml', form.current, 'uYv8hHlXuLEUh34S7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset()
  };

  return (
    <section id="contact" className='section'>
      <h5 className="section__subtitle">Get In Touch </h5>
      <h2 className="section__title">Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BsEnvelope className="contact__icon" />
            <h4 className="contact__title">Email</h4>
            <h5 className="contact__handle">attorfafa@gmail.com</h5>
            <a href="mailto:attorfafa@gmail.com" className="contact__link">Send a message</a> 
          </article>

          <article className="contact__option">
            <BsTelegram className="contact__icon" />
            <h4 className="contact__title">Telegram</h4>
            <h5 className="contact__handle">sayaprayer</h5>
            <a href="https://t.me/sayaprayer" className="contact__link">Send a message</a> 
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__icon" />
            <h4 className="contact__title">Whatsapp</h4>
            <h5 className="contact__handle">050 229 7337</h5>
            <a href="https://api.whatsapp.com/send?phone=+233502297337" className="contact__link">Send a message</a> 
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="name" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn--primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact