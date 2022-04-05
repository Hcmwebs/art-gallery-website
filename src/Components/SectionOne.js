import React from 'react';
import imageGrid1Mobile from '../assets/mobile/image-grid-1.jpg';
import imageGrid1Mobile2x from '../assets/mobile/image-grid-1@2x.jpg';
import imageGrid1Tablet from '../assets/tablet/image-grid-1.jpg';
import imageGrid1Tablet2x from '../assets/tablet/image-grid-1@2x.jpg';
import imageGrid1Desktop from '../assets/desktop/image-grid-1.jpg';
import imageGrid1Desktop2x from '../assets/desktop/image-grid-1@2x.jpg';

const Section = () => {
	return (
		<section className='section section-one'>
			<div className='section-header'>
				<picture>
					<source
						srcset={imageGrid1Mobile}
						media='(max-width:375px)'
						size={imageGrid1Mobile2x}
					/>
					<source
						srcset={imageGrid1Tablet}
						media='(max-width:768px)'
						size={imageGrid1Tablet2x}
					/>
					<source
						srcset={imageGrid1Desktop}
						media='(max-width:1440px)'
						size={imageGrid1Desktop2x}
					/>
				</picture>
				<img src={imageGrid1Mobile} alt='art exhibition' className='img' />
			</div>
			<div className='section-body'>
				<h2>Your day at the gallery</h2>
				<p>
					Wander through our distinct collections and find new insights about
					our artists. Dive into the details of their creative process.
				</p>
			</div>
		</section>
	);
};

export default Section;
