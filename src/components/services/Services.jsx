import React from 'react'
import './services.css'
import { BsCheck2All } from 'react-icons/bs'

const Services = () => {
	return (
		<section id='services' className='section'>
			<h5 className='section__subtitle'>What I Offer</h5>
			<h2 className='section__title'>Services</h2>

			<div className=' container services__container'>
				<article className='service'>
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
				</article>
				<article className='service'>
					<div className='service__head'>
						<h3 className='service__title'>Web Development</h3>
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
              <li className='list__item'>
                <BsCheck2All className='list__icon' />
                <p className="list__description">Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              
						</ul>
					</div>
				</article>
				<article className='service'>
					<div className='service__head'>
						<h3 className='service__title'>Content Creation</h3>
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
				</article>
			</div>
		</section>
	)
}

export default Services
