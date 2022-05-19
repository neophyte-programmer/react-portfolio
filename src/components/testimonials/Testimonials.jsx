import React from 'react'
import './testimonials.css'
import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'
import avatar4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// Array to store testimonial details in an object and then map through the object to display the testimonials
// id is going to be the unique key for each testimonial item
const data = [
	{
		id: 1,
		avatar: avatar1,
		name: 'Jane Doe',
		review: 'What a helpful bunch. After being scammed by another web design company, I was recommended Fluid Studios and I now know why. They are quick to respond, informative and deliver what is asked for. Would highly recommend. Thanks guys!',
	},
	{
		id: 2,
		avatar: avatar2,
		name: 'Sam Ray',
		review: 'What a helpful bunch. After being scammed by another web design company, I was recommended Fluid Studios and I now know why. They are quick to respond, informative and deliver what is asked for. Would highly recommend. Thanks guys!',
	},
	{
		id: 3,
		avatar: avatar3,
		name: 'Benedict Forson',
		review: 'What a helpful bunch. After being scammed by another web design company, I was recommended Fluid Studios and I now know why. They are quick to respond, informative and deliver what is asked for. Would highly recommend. Thanks guys!',
	},
	{
		id: 4,
		avatar: avatar4,
		name: 'Kayla Mitchell',
		review: 'What a helpful bunch. After being scammed by another web design company, I was recommended Fluid Studios and I now know why. They are quick to respond, informative and deliver what is asked for. Would highly recommend. Thanks guys!',
	},
]

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
				// pagination={{ clickable: true }}
			>
				{/* Hardcoded testimonials  */}
				{/* <article className='testimonial'>
					<div className='client__avatar'>
						<img src={avatar4} alt='' />
					</div>
					<h5 className='client__name'>Samuella Smith</h5>
					<small className='client__review'>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Veniam ullam impedit rem modi illum tenetur totam
						in earum deserunt illo?
					</small>
				</article> */}

				{/* Map through the object to display the testimonials */}
				{data.map(({ id, avatar, name, review }) => {
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
