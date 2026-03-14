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
      <div className="w-full bg-[#eee] p-6">
         <h2 className="mb-6 text-3xl font-bold">Write</h2>
         <form
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
            autoComplete="off"
         >
            <p className="text-2xl">Title</p>
            <input
               type="text"
               className="mb-2 rounded bg-white p-2"
               value={title}
               onChange={(e) => {
                  setTitle(e.target.value);
               }}
            />
            <p className="text-2xl">Content</p>
            <textarea
               className="mb-2 rounded bg-white p-2"
               value={content}
               onChange={(e) => {
                  setContent(e.target.value);
               }}
            />
            <button
               type="submit"
               className="mt-4 block w-32 rounded-lg bg-red-500 p-2 text-white"
            >
               발행
            </button>
         </form>
      </div>
   );
}
