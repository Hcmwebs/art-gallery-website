import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
	return (
		<div>
			<h2>404</h2>
			<p>Oops! page not found</p>
			<Link to='/' className='btn'>
				Back to Home
			</Link>
		</div>
	);
};

export default Error;
