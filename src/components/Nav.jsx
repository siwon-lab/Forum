import { Link } from 'react-router-dom';

export default function Nav() {
   return (
      <nav className="flex h-20 w-full items-center bg-[#ddd]">
         <Link to="/">
            <h1 className="mx-4 text-4xl">Forum</h1>
         </Link>
         <Link to="/write">
            <h1 className="ml-2 text-3xl font-extralight text-gray-400 transition-colors hover:text-black">
               Write
            </h1>
         </Link>
      </nav>
   );
}
