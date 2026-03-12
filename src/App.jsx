import { useEffect, useState } from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Write from './pages/write';
import Edit from './pages/Edit';
import { useSelector } from 'react-redux';
import Post from './components/Post';

function App() {
	const posts = useSelector((state) => state.posts);

	useEffect(() => {
		localStorage.setItem('posts', JSON.stringify(posts));
	}, [posts]);

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
				<Route
					path="/"
					element={
						<div className="w-full bg-[#eee] px-6 py-2">
							{posts.map((post) => (
								<Post post={post} key={post.id} />
							))}
						</div>
					}
				/>
				<Route path="/write" element={<Write />} />
				<Route path="/edit/:id" element={<Edit />} />
				<Route path="*" element={<p>404</p>} />
			</Routes>
		</>
	);
}

export default App;
