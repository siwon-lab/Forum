import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove, like } from '../store';
import { Link } from 'react-router-dom';

export default function Post({ post }) {
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.posts);

	const [liked, setLiked] = useState(post.liked);

	useEffect(() => {
		setLiked(post.liked);
	}, [posts]);

	return (
		<div className="w-full min-h-40 p-4 my-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
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
				className="text-2xl cursor-pointer underline hover:text-red-500 transition-colors duration-300"
				onClick={() => {
					dispatch(remove(post.id));
				}}
			>
				삭제
			</span>
		</div>
	);
}
