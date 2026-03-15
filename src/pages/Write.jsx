import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { write } from '../store';

export default function Write() {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const posts = useSelector((state) => state.posts);

   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');

   return (
      <div className="flex min-h-screen w-full flex-col items-center bg-[#eee]">
         <div className="flex w-[40%] max-w-lg min-w-xs flex-col items-center">
            <h2 className="my-10 text-3xl font-bold">Write</h2>
            <form
               className="w-full"
               autoComplete="off"
               onSubmit={(e) => {
                  e.preventDefault();
                  if (title === '') {
                     alert('제목을 입력해주세요.');
                  } else if (content === '') {
                     alert('내용을 입력해주세요.');
                  } else {
                     dispatch(
                        write({
                           id: Date.now(),
                           title: title,
                           content: content,
                           liked: false,
                        }),
                     );
                     navigate('/');
                  }
               }}
            >
               <p className="mb-2 text-2xl">Title</p>
               <input
                  type="text"
                  className="mb-6 w-full rounded bg-white p-2 outline-none"
                  value={title}
                  onChange={(e) => {
                     setTitle(e.target.value);
                  }}
               />
               <p className="mb-2 text-2xl">Content</p>
               <textarea
                  className="mb-6 min-h-40 w-full rounded bg-white p-2 outline-none"
                  value={content}
                  onChange={(e) => {
                     setContent(e.target.value);
                  }}
               />
               <button
                  type="submit"
                  className="mt-4 block w-[40%] max-w-64 min-w-32 cursor-pointer rounded-lg bg-red-500 p-2 text-white"
               >
                  발행
               </button>
            </form>
         </div>
      </div>
   );
}
