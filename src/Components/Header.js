import React from 'react'
import imageHeroMobile from '../assets/mobile/image-hero.jpg'
import imageHeroTablet from '../assets/tablet/image-hero.jpg'
import imageHeroDesktop from '../assets/desktop/image-hero.jpg'
import imageHeroMobile2x from '../assets/mobile/image-hero@2x.jpg'
import imageHeroTablet2x from '../assets/tablet/image-hero@2x.jpg'
import imageHeroDesktop2x from '../assets/desktop/image-hero@2x.jpg'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header className='header'>
			<div className='hero'>
				<div className='hero-deco'></div>
				<div className='hero-image'>
					<picture>
						<source
							media='(max-width: 1440px)'
							srcSet={`${imageHeroDesktop} 1440w, ${imageHeroDesktop2x} 2x`}
						/>

						<source
							media='(max-width: 768px)'
							srcSet={`${imageHeroTablet} 768w, ${imageHeroTablet2x} 2x`}
						/>

						<source
							media='(max-width: 375px)'
							srcSet={`${imageHeroMobile} 375w, ${imageHeroMobile2x} 2x`}
						/>
						<img src={imageHeroDesktop} alt='hero' className='img' />
					</picture>
				</div>

				<div className='hero-text'>
					<h1 className='title'>
						{' '}
						<span>Moder</span>n <br /> <span>Art Gal</span>lery
					</h1>
					<p>
						The arts in the collection of the Modern Art Gallery all started
						from a spark of inspiration. Will these pieces inspire you? Visit us
						and find out.
					</p>

					<Link to='/location' className='btn btn-home'>
						Our location
						<svg
							className='arrow'
							width='10'
							height='24'
							xmlns='http://www.w3.org/2000/svg'>
							<path stroke='#FFF' fill='none' d='m1 0 8 12-8 12' />
						</svg>
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
