import { useEffect, useState } from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Write from './pages/write';
import Edit from './pages/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { remove, like } from './store';

function App() {
	const posts = useSelector((state) => state.posts);

	useEffect(() => {
		localStorage.setItem('posts', JSON.stringify(posts));
	}, [posts]);

	return (
		<>
			<nav className="w-full h-16 bg-[#ddd] flex items-center">
				<Link to="/">
					<h1 className="text-4xl mx-4">Forum</h1>
				</Link>
				<Link to="/write">
					<h1 className="text-3xl mx-2 text-gray-400">Write</h1>
				</Link>
			</nav>

			<Routes>
				<Route
					path="/"
					element={
						<div className="w-full bg-[#eee] p-6">
							{posts.map((post) => (
								<Card post={post} key={post.id} />
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

function Card({ post }) {
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.posts);

	const [liked, setLiked] = useState(post.liked);

	useEffect(() => {
		setLiked(post.liked);
	}, [posts]);
   
	return (
		<div className="w-full min-h-40 p-4 my-4 bg-white rounded-lg shadow-md">
			<h2 className="text-3xl font-semibold">{post.title}</h2>
			<p className="text-2xl">{post.content}</p>
			<div className="flex">
				<button
					className="text-4xl text-red-500 cursor-pointer mb-2 ml-auto mr-4"
					onClick={() => {
						dispatch(like(post.id));
					}}
				>
					{liked ? '♥' : '♡'}
				</button>
			</div>
			<Link to={'/edit/' + post.id}>
				<span className="text-2xl cursor-pointer underline mr-4">수정</span>
			</Link>
			<span
				className="text-2xl cursor-pointer underline"
				onClick={() => {
					dispatch(remove(post.id));
				}}
			>
				삭제
			</span>
		</div>
	);
}

export default App;
