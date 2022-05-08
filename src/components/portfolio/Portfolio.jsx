import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio" className='section'>
      <h5 className="section__subtitle">View My Recent Work</h5>
      <h2 className="section__title">My Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__img">
            <img src={img1} alt="" />
          </div>
          <h3 className="portfolio__title">Item Title</h3>
         
         <div className='portfolio__btns'>
           <a href="https://github.com/neophyte-programmer" target="_blank" className="btn">Github</a>
          <a href="https://dribbble.com/Alien_pixels" target="_blank" className="btn btn--primary">Demo</a>
         </div>

        </article>
        <article className="portfolio__item">
          <div className="portfolio__img">
            <img src={img1} alt="" />
          </div>
          <h3 className="portfolio__title">Item Title</h3>
         
         <div className='portfolio__btns'>
           <a href="https://github.com/neophyte-programmer" target="_blank" className="btn">Github</a>
          <a href="https://dribbble.com/Alien_pixels" target="_blank" className="btn btn--primary">Demo</a>
         </div>

        </article>
        <article className="portfolio__item">
          <div className="portfolio__img">
            <img src={img1} alt="" />
          </div>
          <h3 className="portfolio__title">Item Title</h3>
         
         <div className='portfolio__btns'>
           <a href="https://github.com/neophyte-programmer" target="_blank" className="btn">Github</a>
          <a href="https://dribbble.com/Alien_pixels" target="_blank" className="btn btn--primary">Demo</a>
         </div>

        </article>
        <article className="portfolio__item">
          <div className="portfolio__img">
            <img src={img1} alt="" />
          </div>
          <h3 className="portfolio__title">Item Title</h3>
         
         <div className='portfolio__btns'>
           <a href="https://github.com/neophyte-programmer" target="_blank" className="btn">Github</a>
          <a href="https://dribbble.com/Alien_pixels" target="_blank" className="btn btn--primary">Demo</a>
         </div>

        </article>
        <article className="portfolio__item">
          <div className="portfolio__img">
            <img src={img1} alt="" />
          </div>
          <h3 className="portfolio__title">Item Title</h3>
         
         <div className='portfolio__btns'>
           <a href="https://github.com/neophyte-programmer" target="_blank" className="btn">Github</a>
          <a href="https://dribbble.com/Alien_pixels" target="_blank" className="btn btn--primary">Demo</a>
         </div>

        </article>
        <article className="portfolio__item">
          <div className="portfolio__img">
            <img src={img1} alt="" />
          </div>
          <h3 className="portfolio__title">Item Title</h3>
         
         <div className='portfolio__btns'>
           <a href="https://github.com/neophyte-programmer" target="_blank" className="btn">Github</a>
          <a href="https://dribbble.com/Alien_pixels" target="_blank" className="btn btn--primary">Demo</a>
         </div>

        </article>
      </div>
    </section>
  )
}

export default Portfolio