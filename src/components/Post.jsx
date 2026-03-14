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
      <div className="my-2 min-h-40 w-full rounded-lg bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg">
         <h2 className="text-3xl font-semibold">{post.title}</h2>
         <p className="text-2xl">{post.content}</p>
         <div className="flex">
            <button
               className="mr-4 mb-2 ml-auto cursor-pointer text-4xl text-red-500"
               onClick={() => {
                  dispatch(like(post.id));
               }}
            >
               {liked ? '♥' : '♡'}
            </button>
         </div>
         <Link to={'/edit/' + post.id}>
            <span className="mr-4 cursor-pointer text-2xl underline transition-colors hover:text-blue-500">수정</span>
         </Link>
         <span
            className="cursor-pointer text-2xl underline transition-colors hover:text-red-500"
            onClick={() => {
               dispatch(remove(post.id));
            }}
         >
            삭제
         </span>
      </div>
   );
}
