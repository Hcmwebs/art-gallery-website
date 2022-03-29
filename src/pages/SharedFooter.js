import React from 'react';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<Outlet />
			<Footer />
		</>
	);
};

export default Home;
