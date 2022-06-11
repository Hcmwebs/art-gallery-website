import React from 'react'
import Home from './pages/Home'
import Location from './pages/Location'
import { Routes, Route } from 'react-router-dom'
import Error from './pages/Error'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='location' element={<Location />} />
			<Route path='*' element={<Error />} />
		</Routes>
	)
}

export default App
