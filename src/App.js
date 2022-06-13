import React from 'react'
import Home from './pages/Home'
import Location from './pages/Location'
import { Routes, Route } from 'react-router-dom'


const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='location' element={<Location />} />
		</Routes>
	)
}

export default App
