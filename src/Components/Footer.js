import React from 'react';
import { FaTwitter, FaInstagram, FaFacebookSquare } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className='footer'>
			<h3> Modern Art Gallery</h3>
			<p>
				The Modern Art Gallery is free to all visitors and open seven days a
				week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
			</p>
			<div className='social-media'>
				<FaFacebookSquare />
				<FaInstagram />
				<FaTwitter />
			</div>
		</footer>
	);
};

export default Footer;
