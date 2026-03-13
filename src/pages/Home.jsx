import { useDispatch, useSelector } from 'react-redux';
import Post from './../components/Post';
import { removeAll } from '../store';

export default function Home() {
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.posts);

	return (
		<div className="w-full bg-[#eee] px-6 py-4 flex flex-col">
			<button
				className="border border-red-500 rounded-md mb-2 p-1 text-red-500 cursor-pointer text-2xl hover:bg-red-500 hover:text-white transition-colors duration-300 ml-auto"
				onClick={() => {
					dispatch(removeAll());
				}}
			>
				모든 글 삭제하기
			</button>
			{posts.map((post) => (
				<Post post={post} key={post.id} />
			))}
		</div>
	);
}
