import { useEffect, useState } from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Write from './pages/write';
import Edit from './pages/Edit';
import Home from './pages/Home';

function App() {
	return (
		<>
			<nav className="w-full h-20 bg-[#ddd] flex items-center">
				<Link to="/">
					<h1 className="text-4xl mx-4">Forum</h1>
				</Link>
				<Link to="/write">
					<h1 className="text-3xl text-gray-400 font-extralight ml-2 hover:text-black transition-colors">
						Write
					</h1>
				</Link>
			</nav>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/write" element={<Write />} />
				<Route path="/edit/:id" element={<Edit />} />
				<Route path="*" element={<p>404</p>} />
			</Routes>
		</>
	);
}

export default App;
