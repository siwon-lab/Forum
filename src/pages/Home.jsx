import { useSelector } from 'react-redux';
import Post from './../components/Post';

export default function Home() {
	const posts = useSelector((state) => state.posts);

	return (
		<div className="w-full bg-[#eee] px-6 py-2">
			{posts.map((post) => (
				<Post post={post} key={post.id} />
			))}
		</div>
	);
}
