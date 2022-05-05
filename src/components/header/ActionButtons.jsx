import React from 'react'
import CV from './../../assets/cv.pdf' //import CV

const ActionButtons = () => {
	return (
		<div className='action__buttons'>
			<a href={CV} download>Download CV</a>
            <a href='#contact'>Let's Talk</a>
            
		</div>
	)
}

export default ActionButtons
