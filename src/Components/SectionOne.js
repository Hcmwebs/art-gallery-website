import React from 'react'
import imageGrid1Mobile from '../assets/mobile/image-grid-1.jpg'
import imageGrid1Mobile2x from '../assets/mobile/image-grid-1@2x.jpg'
import imageGrid1Tablet from '../assets/tablet/image-grid-1.jpg'
import imageGrid1Tablet2x from '../assets/tablet/image-grid-1@2x.jpg'
import imageGrid1Desktop from '../assets/desktop/image-grid-1.jpg'
import imageGrid1Desktop2x from '../assets/desktop/image-grid-1@2x.jpg'

const Section = () => {
	return (
		<section className='section section-one'>
			<div className='section-header'>
				<picture>
					<source
						media='(min-width:1440px)'
						srcSet={`${imageGrid1Desktop} 1440w, ${imageGrid1Desktop2x} 2x`}
					/>
					<source
						media='(min-width:768px)'
						srcSet={`${imageGrid1Tablet} 768w, ${imageGrid1Tablet2x} 2x`}
					/>
					<source
						media='(min-width:375px)'
						srcSet={`${imageGrid1Mobile} 375w, ${imageGrid1Mobile2x} 2x`}
					/>
					<img src={imageGrid1Desktop} alt='art exhibition' className='img' />
				</picture>
			</div>
			<div className='section-body'>
				<h2>
					Your day <br />
					at the gallery
				</h2>
				<p>
					Wander through our distinct collections and find new insights about
					our artists. Dive into the details of their creative process.
				</p>
			</div>
		</section>
	)
}

export default Section
