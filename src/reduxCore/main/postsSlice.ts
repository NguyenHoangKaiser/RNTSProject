import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@reduxCore/store';
import { TPost } from '@reduxCore/types';

type TPostsSliceState = {
  posts: TPost[];
};

const initialState: TPostsSliceState = {
  posts: [
    {
      userId: 1,
      id: 1,
      title: 'sunt aut',
      body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum',
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae sequi sint nihil dolor ea dolores neque',
    },
  ],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setPosts: (state, action: PayloadAction<TPost[]>) => {
      state.posts = action.payload;
    },
    addPost: (state, action: PayloadAction<Omit<TPost, 'body'>>) => {
      // state.posts.push(action.payload);
      state.posts = [
        ...state.posts,
        {
          userId: action.payload.userId,
          id: state.posts.length,
          title: action.payload.title,
          body: 'lorem ipsum dolor sit amid',
        },
      ];
    },
    deletePost: (
      state,
      action: PayloadAction<Omit<TPost, 'body' | 'title'>>,
    ) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
    },
  },
});

/**
 * Selectors are functions that know how to extract specific pieces of information
 * @param state State of the store
 * @returns State of posts
 */
export const selectAllPosts = (state: RootState) => state.posts.posts;

export const { setPosts, addPost, deletePost } = postsSlice.actions;
