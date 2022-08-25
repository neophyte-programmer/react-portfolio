import React from 'react'
import './experience.css'
import {
	DiCss3Full,
	DiJavascript1,
	DiMongodb,
} from 'react-icons/di'
import { BsBootstrap } from 'react-icons/bs'
import { SiTailwindcss, SiReact, SiNextdotjs, SiFirebase, SiExpress } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'


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
							<SiReact className='experience__icon' />
							<div>
								<h4 className='experience__subtitle'>React</h4>
								<p className='experience__description'>
									Intermediate
								</p>
							</div>
						</article>
						<article className='experience__item'>
							<SiNextdotjs className='experience__icon' />
							<div>
								<h4 className='experience__subtitle'>NextJS</h4>
								<p className='experience__description'>
									Intermediate
								</p>
							</div>
						</article>
						{/* <article className='experience__item'>
							<AiOutlineHtml5 className='experience__icon' />
							<div>
								<h4 className='experience__subtitle'>HTML5</h4>
								<p className='experience__description'>
									Intermediate
								</p>
							</div>
						</article> */}
						<article className='experience__item'>
							<DiCss3Full className='experience__icon' />
							<div>
								<h4 className='experience__subtitle'>CSS</h4>
								<p className='experience__description'>
									Experienced
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
									Experienced
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
									Beginner
								</p>
							</div>
						</article>
						<article className='experience__item'>
							<SiFirebase className='experience__icon' />
							<div>
								<h4 className='experience__subtitle'>Firebase</h4>
								<p className='experience__description'>
									Beginner
								</p>
							</div>
						</article>
						<article className='experience__item'>
							<SiExpress className='experience__icon' />
							<div>
								<h4 className='experience__subtitle'>Express</h4>
								<p className='experience__description'>
									Express
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
									Beginner
								</p>
							</div>
						</article>
						<article className='experience__item'>
							<SiNextdotjs className='experience__icon' />
							<div>
								<h4 className='experience__subtitle'>NextAuth</h4>
								<p className='experience__description'>
									Beginner
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
