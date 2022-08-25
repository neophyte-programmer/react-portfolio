import React from 'react'
import './portfolio.css'
import { portfolio } from '../data'

const Portfolio = () => {
	return (
		<section id='portfolio' className='section'>
			<h5 className='section__subtitle'>View My Recent Work</h5>
			<h2 className='section__title'>My Portfolio</h2>

			<div className='container portfolio__container'>
				

				{
					// Mapping through the data array and displaying the portfolio items
					portfolio.map(({ id, image, title, desc, github, demo }) => {
						return (
							<article key={id} className='portfolio__item'>
								<div className='portfolio__img'>
									<img src={image} alt='' />
								</div>
								<h3 className='portfolio__title'>{title}</h3>
								<p className='portfolio__description'>{desc}</p>

								<div className='portfolio__btns'>
									<a
										href={github}
										target='_blank'
										className='btn'
									>
										Github
									</a>
									<a
										href={demo}
										target='_blank'
										className='btn btn--primary'
									>
										Demo
									</a>
								</div>
							</article>
						)
					})
				}
			</div>
		</section>
	)
}

export default Portfolio
