import React from 'react';

import { Link } from 'react-router-dom';
import Map from '../Components/Map';

const Location = () => {
	return (
		<>
			<main className='main'>
				<Link to='/' className='btn btn-location'>
					<svg
						className='arrow'
						width='10'
						height='24'
						xmlns='http://www.w3.org/2000/svg'>
						<path stroke='#FFF' fill='none' d='M9 24 1 12 9 0' />
					</svg>
					Back to Home
				</Link>
				<Map />
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
			</main>
		</>
	);
};

export default Location;
