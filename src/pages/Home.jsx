import { useDispatch, useSelector } from 'react-redux';
import Post from './../components/Post';
import { removeAll } from '../store';

export default function Home() {
   const dispatch = useDispatch();
   const posts = useSelector((state) => state.posts);

   return (
      <div className="flex min-h-screen w-full flex-col bg-[#eee] p-4 items-center">
         <button
            className="mb-4 ml-auto cursor-pointer rounded-md border border-red-500 p-1 text-xl font-semibold text-red-500 transition-colors duration-300 hover:bg-red-500 hover:text-white"
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
