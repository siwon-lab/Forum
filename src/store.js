import { configureStore, createSlice } from '@reduxjs/toolkit';

const posts = createSlice({
	name: 'posts',
	initialState: () => {
		const saved = localStorage.getItem('posts');
		return saved
			? JSON.parse(saved)
			: [{ id: 0, title: 'Title', content: 'Content', liked: false }];
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
      removeAll(state) {
         return []
      }
	},
});

export const { write, remove, like, edit, removeAll } = posts.actions;

const store = configureStore({
	reducer: { posts: posts.reducer },
});

store.subscribe(() => {
	localStorage.setItem('posts', JSON.stringify(store.getState().posts));
});

export default store;