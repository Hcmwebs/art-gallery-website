import Home from './pages/Home';
import Location from './pages/Location';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './pages/Error';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='location' element={<Location />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
