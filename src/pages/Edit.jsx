import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { edit } from '../store';

export default function Edit() {
   const { id } = useParams();
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const posts = useSelector((state) => state.posts);
   const post = posts.find((obj) => obj.id === Number(id));

   const [title, setTitle] = useState(post.title);
   const [content, setContent] = useState(post.content);

   return (
      <div className="w-full bg-[#eee] p-6">
         <h2 className="mb-6 text-3xl font-bold">Edit</h2>
         <form
            autoComplete="off"
            onSubmit={(e) => {
               e.preventDefault();
               if (title === '') {
                  alert('제목을 입력해주세요.');
               } else if (content === '') {
                  alert('내용을 입력해주세요.');
               } else {
                  dispatch(
                     edit({
                        id: post.id,
                        title: title,
                        content: content,
                        liked: post.liked,
                     }),
                  );
                  navigate('/');
               }
            }}
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
               완료
            </button>
         </form>
      </div>
   );
}
