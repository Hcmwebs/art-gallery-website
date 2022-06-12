import React from 'react'
import Header from '../Components/Header'
import Main from '../Components/Main'
import { FaTwitter, FaInstagram, FaFacebookSquare } from 'react-icons/fa'
const Home = () => {
	return (
		<div className='container'>
			<Header />
			<Main />

			<footer className='footer footer-home'>
				<h3>
					Modern <br /> Art Gallery
				</h3>
				<p>
					The Modern Art Gallery is free to all visitors and open seven days a
					week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
				</p>

				<div className='footer-social-media'>
					<a
						href='https://facebook.com/'
						target='_blank'
						rel='noopener noreferrer'
						className='link'>
						<FaFacebookSquare />
					</a>
					<a
						href='https://instagram.com/'
						target='_blank'
						rel='noopener noreferrer'
						className='link'>
						<FaInstagram />
					</a>
					<a
						href='https://twitter.com/'
						target='_blank'
						rel='noopener noreferrer'
						className='link'>
						<FaTwitter />
					</a>
				</div>
			</footer>
		</div>
	)
}

export default Home
