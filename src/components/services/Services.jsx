import React from 'react'
import './services.css'
import { BsCheck2All } from 'react-icons/bs'

const Services = () => {
	return (
		<section id='services' className='section'>
			<h5 className='section__subtitle'>What I Offer</h5>
			<h2 className='section__title'>Services</h2>

			<div className=' container services__container'>
				{/* <article className='service'>
					<div className='service__head'>
						<h3 className='service__title'>UI / UX Design</h3>
					</div>
					<div className='service__body'>
						<ul className='service__list'>
              <li className='list__item'>
                <BsCheck2All className='list__icon' />
                <p className="list__description">Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li className='list__item'>
                <BsCheck2All className='list__icon' />
                <p className="list__description">Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li className='list__item'>
                <BsCheck2All className='list__icon' />
                <p className="list__description">Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li className='list__item'>
                <BsCheck2All className='list__icon' />
                <p className="list__description">Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li className='list__item'>
                <BsCheck2All className='list__icon' />
                <p className="list__description">Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              
						</ul>
					</div>
				</article> */}
				<article className='service'>
					<div className='service__head'>
						<h3 className='service__title'>Frontend Development</h3>
					</div>
					<div className='service__body'>
						<ul className='service__list'>
              <li className='list__item'>
                <BsCheck2All className='list__icon' />
                <p className="list__description">Client side development with necessary tools</p>
              </li>
              <li className='list__item'>
                <BsCheck2All className='list__icon' />
                <p className="list__description">Testing the website for usabilty</p>
              </li>
              <li className='list__item'>
                <BsCheck2All className='list__icon' />
                <p className="list__description">Optional maintenance of website - Paid</p>
              </li>
              <li className='list__item'>
                <BsCheck2All className='list__icon' />
                <p className="list__description">Ensuring browser compatability</p>
              </li>
              <li className='list__item'>
                <BsCheck2All className='list__icon' />
                <p className="list__description">Website functionality</p>
              </li>
              <li className='list__item'>
                <BsCheck2All className='list__icon' />
                <p className="list__description">Working with UI/UX Designers to bring website to life.</p>
              </li>
              
						</ul>
					</div>
				</article>
				{/* <article className='service'>
					<div className='service__head'>
						<h3 className='service__title'>Backend Development</h3>
					</div>
					<div className='service__body'>
						<ul className='service__list'>
              <li className='list__item'>
                <BsCheck2All className='list__icon' />
                <p className="list__description">User Authentication</p>
              </li>
              <li className='list__item'>
                <BsCheck2All className='list__icon' />
                <p className="list__description">Testing</p>
              </li>
              <li className='list__item'>
                <BsCheck2All className='list__icon' />
                <p className="list__description">Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li className='list__item'>
                <BsCheck2All className='list__icon' />
                <p className="list__description">Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li className='list__item'>
                <BsCheck2All className='list__icon' />
                <p className="list__description">Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              
						</ul>
					</div>
				</article> */}
			</div>
		</section>
	)
}

export default Services
