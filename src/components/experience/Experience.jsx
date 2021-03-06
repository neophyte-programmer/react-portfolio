import React from 'react'
import './experience.css'
import { AiOutlineHtml5 } from 'react-icons/ai'
import {
	DiCss3Full,
	DiJavascript1,
	DiPhp,
	DiMongodb,
	DiMysql,
} from 'react-icons/di'
import { BsBootstrap } from 'react-icons/bs'
import { SiTailwindcss, SiReact } from 'react-icons/si'
import { FaNodeJs, FaPython } from 'react-icons/fa'

const Experience = () => {
	return (
		<section id='experience' className='section'>
			<h5 className='section__subtitle'>My Abilities</h5>
			<h2 className='section__title'>My Experience</h2>

			<div className='container experience__container'>
				<div className='experience__frontend'>
					<h3 className='experience__title'>Frontend Development</h3>
					<div className='experience__content'>
						<article className='experience__item'>
							<AiOutlineHtml5 className='experience__icon' />
							<div>
								<h4 className='experience__subtitle'>HTML5</h4>
								<p className='experience__description'>
									Intermediate
								</p>
							</div>
						</article>
						<article className='experience__item'>
							<DiCss3Full className='experience__icon' />
							<div>
								<h4 className='experience__subtitle'>CSS</h4>
								<p className='experience__description'>
									Intermediate
								</p>
							</div>
						</article>
						<article className='experience__item'>
							<DiJavascript1 className='experience__icon' />
							<div>
								<h4 className='experience__subtitle'>
									Javascript
								</h4>
								<p className='experience__description'>
									Intermediate
								</p>
							</div>
						</article>
						<article className='experience__item'>
							<BsBootstrap className='experience__icon' />
							<div>
								<h4 className='experience__subtitle'>
									Bootstrap
								</h4>
								<p className='experience__description'>
									Intermediate
								</p>
							</div>
						</article>
						<article className='experience__item'>
							<SiTailwindcss className='experience__icon' />
							<div>
								<h4 className='experience__subtitle'>
									Tailwind
								</h4>
								<p className='experience__description'>
									Intermediate
								</p>
							</div>
						</article>
						<article className='experience__item'>
							<SiReact className='experience__icon' />
							<div>
								<h4 className='experience__subtitle'>React</h4>
								<p className='experience__description'>
									Intermediate
								</p>
							</div>
						</article>
					</div>
				</div>
				<div className='experience__backend'>
					<h3 className='experience__title'>Backend Development</h3>
					<div className='experience__content'>
						<article className='experience__item'>
							<FaNodeJs className='experience__icon' />
							<div>
								<h4 className='experience__subtitle'>
									Node JS
								</h4>
								<p className='experience__description'>
									Intermediate
								</p>
							</div>
						</article>
						<article className='experience__item'>
							<DiPhp className='experience__icon' />
							<div>
								<h4 className='experience__subtitle'>PHP</h4>
								<p className='experience__description'>
									Intermediate
								</p>
							</div>
						</article>
						<article className='experience__item'>
							<FaPython className='experience__icon' />
							<div>
								<h4 className='experience__subtitle'>Python</h4>
								<p className='experience__description'>
									Intermediate
								</p>
							</div>
						</article>
						<article className='experience__item'>
							<DiMongodb className='experience__icon' />
							<div>
								<h4 className='experience__subtitle'>
									MongoDB
								</h4>
								<p className='experience__description'>
									Intermediate
								</p>
							</div>
						</article>
						<article className='experience__item'>
							<DiMysql className='experience__icon' />
							<div>
								<h4 className='experience__subtitle'>MySQL</h4>
								<p className='experience__description'>
									Intermediate
								</p>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Experience
