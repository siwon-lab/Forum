import { configureStore, createSlice } from '@reduxjs/toolkit';

let posts = createSlice({
	name: 'posts',
	initialState: () => {
		const saved = localStorage.getItem('posts');
		return saved ? JSON.parse(saved) : [];
	},
	reducers: {
		write(state, action) {
			// obj
			state.push(action.payload);
		},
		edit(state, action) {
			// obj
			const index = state.findIndex((obj) => obj.id === action.payload.id);
			state[index] = action.payload;
		},
		remove(state, action) {
			// id
			return state.filter((obj) => obj.id !== action.payload);
		},
		like(state, action) {
			// id
			const post = state.find((obj) => obj.id === action.payload);
			post.liked = !post.liked;
		},
	},
});

export const { write, remove, like, edit } = posts.actions;

export default configureStore({
	reducer: { posts: posts.reducer },
});
