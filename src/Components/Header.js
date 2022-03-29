import React from 'react';
import imageHeroMobile from '../assets/mobile/image-hero.jpg';
import imageHeroTablet from '../assets/tablet/image-hero.jpg';
import imageHeroDesktop from '../assets/desktop/image-hero.jpg';
import imageHeroMobile2x from '../assets/mobile/image-hero@2x.jpg';
import imageHeroTablet2x from '../assets/tablet/image-hero@2x.jpg';
import imageHeroDesktop2x from '../assets/desktop/image-hero@2x.jpg';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<div className='hero-image'>
				<picture>
					<source
						srcset={imageHeroMobile}
						media='(max-width: 375px)'
						size={imageHeroMobile2x}
					/>
					<source
						srcset={imageHeroTablet}
						media='(max-width: 768px)'
						size={imageHeroTablet2x}
					/>
					<source
						srcset={imageHeroDesktop}
						media='(max-width: 1440px)'
						size={imageHeroDesktop2x}
					/>
					<img src={imageHeroMobile} alt='hero' className='img' />
				</picture>
			</div>
			<div className='hero-text'>
				<h1> Modern Art Gallery</h1>
				<p>
					The arts in the collection of the Modern Art Gallery all started from
					a spark of inspiration. Will these pieces inspire you? Visit us and
					find out.
				</p>
				<Link to='/location' className='btn'>
					Our location <span>{<FaChevronRight />}</span>
				</Link>
			</div>
		</header>
	);
};

export default Header;
