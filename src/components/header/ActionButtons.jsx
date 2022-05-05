import React from 'react'
import CV from './../../assets/cv.pdf' //import CV

const ActionButtons = () => {
	return (
		<div className='action__buttons'>
			<a href={CV} download className='btn'>Download CV</a>
            <a href='#contact' className='btn btn--primary'>Let's Talk</a>
            
		</div>
	)
}

export default ActionButtons
