import React from 'react'
import imageGrid2Mobile from '../assets/mobile/image-grid-2.jpg'
import imageGrid2Mobile2 from '../assets/mobile/image-grid-2@2x.jpg'
import imageGrid2Tablet from '../assets/tablet/image-grid-2.jpg'
import imageGrid2Tablet2 from '../assets/tablet/image-grid-2@2x.jpg'
import imageGrid2Desktop from '../assets/desktop/image-grid-2.jpg'
import imageGrid2Desktop2 from '../assets/desktop/image-grid-2@2x.jpg'
import imageGrid3Mobile from '../assets/mobile/image-grid-3.jpg'
import imageGrid3Mobile3 from '../assets/mobile/image-grid-3@2x.jpg'
import imageGrid3Tablet from '../assets/tablet/image-grid-3.jpg'
import imageGrid3Tablet3 from '../assets/tablet/image-grid-3@2x.jpg'
import imageGrid3Desktop from '../assets/desktop/image-grid-3.jpg'
import imageGrid3Desktop3 from '../assets/desktop/image-grid-3@2x.jpg'

const SectionTwo = () => {
	return (
		<section className='section section-two'>
			<div className='section-header'>
				<picture>
					<source
						media='(min-width:1440px)'
						srcSet={`${imageGrid2Desktop} 1440w, ${imageGrid2Desktop2} 2x`}
					/>
					<source
						media='(min-width:768px)'
						srcSet={`${imageGrid2Tablet} 768w, ${imageGrid2Tablet2} 2x`}
					/>
					<source
						media='(min-width:375px)'
						srcSet={`${imageGrid2Mobile} 375w, ${imageGrid2Mobile2} 2x`}
					/>
					<img src={imageGrid2Desktop} alt='grid2' className='img' />
				</picture>
			</div>
			<div className='section-body'>
				<div className='section-body-header'>
					<picture>
						<source
							media='(min-width:1440px)'
							srcSet={`${imageGrid3Desktop} 1440w, ${imageGrid3Desktop3} 2x`}
						/>
						<source
							media='(min-width:768px)'
							srcSet={`${imageGrid3Tablet} 768w, ${imageGrid3Tablet3} 2x`}
						/>
						<source
							media='(min-width:375px)'
							srcSet={`${imageGrid3Mobile} 375w, ${imageGrid3Mobile3} 2x`}
						/>
						<img src={imageGrid3Desktop} alt='grid3' className='img' />
					</picture>
				</div>
				<div className='section-body-body'>
					<h2> Come &amp; be inspired</h2>
					<p>
						We’re excited to welcome you to our gallery and see how our
						collections influence you.
					</p>
				</div>
			</div>
		</section>
	)
}

export default SectionTwo
