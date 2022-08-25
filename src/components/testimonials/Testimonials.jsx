import React from 'react'
import './testimonials.css'
import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'
import avatar4 from '../../assets/avatar4.jpg'
import { alex } from '../../assets/assets'
import { testimonials } from '../data'

// import Swiper core and required modules
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const Testimonials = () => {
	return (
		<section id='testimonials' className='section'>
			<h5 className='section__subtitle'>What People Say</h5>
			<h2 className='section__title'>My Testimonials</h2>

			<Swiper
				className='container testimonials__container'
				// install Swiper modules
				modules={[Pagination]}
				pagination={true}
				spaceBetween={40}
				slidesPerView={1}
			>
			{/* Map through the object to display the testimonials */}
				{testimonials.map(({ id, avatar, name, review }) => {
					return (
						<SwiperSlide className='testimonial' key={id}>
							<div className='client__avatar'>
								<img src={avatar} alt='' />
							</div>
							<h5 className='client__name'>{name}</h5>
							<small className='client__review'>{review}</small>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}

export default Testimonials



                        