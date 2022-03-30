import React from 'react';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';

const Main = () => {
	return (
		<main className='main'>
			<article className='article'>
				<SectionOne />
				<SectionTwo />
			</article>
		</main>
	);
};

export default Main;
