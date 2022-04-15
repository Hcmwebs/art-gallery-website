import React from 'react'
import Home from './pages/Home'
import Location from './pages/Location'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './pages/Error'
import SharedFooter from './pages/SharedFooter'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<SharedFooter />}>
					<Route path='/' element={<Home />} />
					<Route path='location' element={<Location />} />
					<Route path='*' element={<Error />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
