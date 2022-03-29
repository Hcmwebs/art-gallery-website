import React from 'react';

const Main = () => {
	return (
		<main className='main'>
			<section className='section'>
				<div className='section-image'>
					<img src='' alt='section image' className='img' />
				</div>
				<div className='section-text'>
					<h2>Your day at the gallery</h2>
					<p>
						Wander through our distinct collections and find new insights about
						our artists. Dive into the details of their creative process.
					</p>
				</div>
			</section>
			<section className='section'>
				<div className='section-image'>
					<img src='' alt='' className='img' />
				</div>
				<div className='section-grid'>
					<div className='section-image'>
						<img src='' alt='' className='img' />
					</div>
					<div className='section-text'>
						<h3> Come &amp; be inspired</h3>
						<p>
							We’re excited to welcome you to our gallery and see how our
							collections influence you.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Main;
