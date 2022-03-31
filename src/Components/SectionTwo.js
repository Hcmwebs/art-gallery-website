import React from 'react';
import imageGrid2Mobile from '../assets/mobile/image-grid-2.jpg';
import imageGrid2Mobile2 from '../assets/mobile/image-grid-2@2x.jpg';
import imageGrid2Tablet from '../assets/tablet/image-grid-2.jpg';
import imageGrid2Tablet2 from '../assets/tablet/image-grid-2@2x.jpg';
import imageGrid2Desktop from '../assets/desktop/image-grid-2.jpg';
import imageGrid2Desktop2 from '../assets/desktop/image-grid-2@2x.jpg';
import imageGrid3Mobile from '../assets/mobile/image-grid-3.jpg';
import imageGrid3Mobile3 from '../assets/mobile/image-grid-3@2x.jpg';
import imageGrid3Tablet from '../assets/tablet/image-grid-3.jpg';
import imageGrid3Tablet3 from '../assets/tablet/image-grid-3@2x.jpg';
import imageGrid3Desktop from '../assets/desktop/image-grid-3.jpg';
import imageGrid3Desktop3 from '../assets/desktop/image-grid-3@2x.jpg';

const SectionTwo = () => {
	return (
		<section className='section'>
			<div className='section-header'>
				<picture>
					<source
						srcset={imageGrid2Desktop}
						media='(max-width:1440px)'
						size={imageGrid2Desktop2}
					/>
					<source
						srcset={imageGrid2Tablet}
						media='(max-width:768px)'
						size={imageGrid2Tablet2}
					/>
					<source
						srcset={imageGrid2Mobile}
						media='(max-width:375px)'
						size={imageGrid2Mobile2}
					/>
				</picture>
				<img src={imageGrid2Mobile} alt='' className='img' />
			</div>
			<div className='section-body'>
				<div className='section-header'>
					<img src={imageGrid3Mobile} alt='' className='img' />
				</div>
				<div className='section-body'>
					<h3> Come &amp; be inspired</h3>
					<p>
						We’re excited to welcome you to our gallery and see how our
						collections influence you.
					</p>
				</div>
			</div>
		</section>
	);
};

export default SectionTwo;