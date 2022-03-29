import React from 'react';
import { FaChevronLeft,FaLocationArrow,FaTwitter, FaInstagram,FaFacebookSquare} from 'react-icons/fa';
const Location = () => {
	return (
		<main className='main'>
			<button className='btn'>
				<span>{<FaChevronLeft />}</span>Back to Home
			</button>
			<section className='section'>
				<h2>Our location</h2>
				<address>
					<p>
						<span className='address-header'>99 King Street</span> <br />
						Newport <br />
						RI 02840 <br />
						United States of America
					</p>
				</address>

				<p>
					Our newly opened gallery is located near the Edward King House on 99
					King Street, the Modern Art Gallery is free to all visitors and open
					seven days a week from 8am to 9pm.
				</p>
			</section>
			<section className='section'>
				<h3> Modern Art Gallery</h3>
				<p>
					The Modern Art Gallery is free to all visitors and open seven days a
					week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
				</p>
				<div className="social-media">

				</div>
			</section>
			<footer className='footer'>
				<FaFacebookSquare />
				<FaInstagram />
				<FaTwitter />
			</footer>
		</main>
	);
};

export default Location;
