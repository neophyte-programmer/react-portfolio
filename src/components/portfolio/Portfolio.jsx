import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'

// Array to store portfolio details in an object and then map through the object to display the portfolio items
// id is going to be the unique key for each portfolio item
const data = [
	{
		id: 1,
		image: img1,
		title: 'Portfolio 1',
		github: 'https://github.com/neophyte-programmer',
		demo: 'https://dribbble.com/Alien_pixels',
	},
	{
		id: 2,
		image: img2,
		title: 'Portfolio 2',
		github: 'https://github.com/neophyte-programmer',
		demo: 'https://dribbble.com/Alien_pixels',
	},
	{
		id: 3,
		image: img3,
		title: 'Portfolio 3',
		github: 'https://github.com/neophyte-programmer',
		demo: 'https://dribbble.com/Alien_pixels',
	},
	{
		id: 4,
		image: img4,
		title: 'Portfolio 4',
		github: 'https://github.com/neophyte-programmer',
		demo: 'https://dribbble.com/Alien_pixels',
	},
	{
		id: 5,
		image: img5,
		title: 'Portfolio 5',
		github: 'https://github.com/neophyte-programmer',
		demo: 'https://dribbble.com/Alien_pixels',
	},
	{
		id: 6,
		image: img6,
		title: 'Portfolio 6',
		github: 'https://github.com/neophyte-programmer',
		demo: 'https://dribbble.com/Alien_pixels',
	},
]

const Portfolio = () => {
	return (
		<section id='portfolio' className='section'>
			<h5 className='section__subtitle'>View My Recent Work</h5>
			<h2 className='section__title'>My Portfolio</h2>

			<div className='container portfolio__container'>
				{/* <article className="portfolio__item">
          <div className="portfolio__img">
            <img src={img1} alt="" />
          </div>
          <h3 className="portfolio__title">Item Title</h3>
         
         <div className='portfolio__btns'>
           <a href="https://github.com/neophyte-programmer" target="_blank" className="btn">Github</a>
          <a href="https://dribbble.com/Alien_pixels" target="_blank" className="btn btn--primary">Demo</a>
         </div>

        </article> */}

				{
					// Mapping through the data array and displaying the portfolio items
					data.map(({ id, image, title, github, demo }) => {
						return (
							<article key={id} className='portfolio__item'>
								<div className='portfolio__img'>
									<img src={image} alt='' />
								</div>
								<h3 className='portfolio__title'>{title}</h3>

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
