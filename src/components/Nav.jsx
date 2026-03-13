import { Link } from 'react-router-dom';

export default function Nav() {
	return (
		<nav className="w-full h-20 bg-[#ddd] flex items-center">
			<Link to="/">
				<h1 className="text-4xl mx-4">Forum</h1>
			</Link>
			<Link to="/write">
				<h1 className="text-3xl text-gray-400 font-extralight ml-2 hover:text-black transition-colors duration-300">
					Write
				</h1>
			</Link>
		</nav>
	);
}
