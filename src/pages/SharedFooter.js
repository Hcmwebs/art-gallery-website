import React from 'react';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';

const Home = () => {
	return (
		<div className='container'>
			<Outlet />
			<Footer />
		</div>
	);
};

export default Home;
