import React from 'react'
import './footer.css'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'

const Footer = () => {
	return (
		<footer>
			<a href='#' className='footer__logo'>
				NUTIFAFA
			</a>

			<ul className='permalinks'>
				<li>
					<a href='#' className='permalink'>
						Home
					</a>
				</li>
				<li>
					<a href='#about' className='permalink'>
						About
					</a>
				</li>
				<li>
					<a href='#experience' className='permalink'>
						Experience
					</a>
				</li>
				<li>
					<a href='#services' className='permalink'>
						Services
					</a>
				</li>
				<li>
					<a href='#portfolio' className='permalink'>
						Portfolio
					</a>
				</li>
				<li>
					<a href='#testimonials' className='permalink'>
						Testimonials
					</a>
				</li>
				<li>
					<a href='#contact' className='permalink'>
						Contact
					</a>
				</li>
			</ul>

			<div className='footer__socials'>
				<a href='https://facebook.com'>
					<FaFacebookF className='footer__social-icon' />
				</a>
        <a href='https://instagram.com'>
          <FaInstagram className='footer__social-icon' />
        </a>
        <a href='https://twitter.com'>
          <FiTwitter className='footer__social-icon' />
        </a>
      </div>
      
      <div className="footer__copyright">
        <small className="footer__copy-text">Nutifafa. All Rights Reserved. </small>
      </div>
		</footer>
	)
}

export default Footer
