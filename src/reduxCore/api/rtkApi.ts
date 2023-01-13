// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE } from '@config';
import { TPost } from '@reduxCore/types';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE,
    prepareHeaders: (headers, _api) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    getAllPosts: builder.query<TPost[], void>({
      query: () => 'posts?userId=1',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Posts' as const, id })),
              { type: 'Posts', id: 'LIST' },
            ]
          : [{ type: 'Posts', id: 'LIST' }],
      // Transform to prevent nested data if we don't need it
      transformResponse: (response: TPost[]) => {
        // Reduce the number of items in the response
        return response.slice(0, 4);
      },
    }),
    getPost: builder.query<TPost, number>({
      query: (id) => `posts/${id}`,
      providesTags: (result, error, id) => [{ type: 'Posts', id }],
      // queryFn(arg, _api, _extraOptions, _baseQuery) {
      //   if (arg <= 0) {
      //     return {
      //       error: {
      //         status: 500,
      //         statusText: 'Internal Server Error',
      //         data: 'Invalid id provided',
      //       },
      //     };
      //   }
      //   return {
      //     data: {
      //       userId: 1,
      //       id: 1,
      //       title: 'sunt aut',
      //       body: 'quia et suscipit suscipit recusandae consequuntur expedita et',
      //     },
      //   };
      // },
    }),
    addPost: builder.mutation({
      query: (newPost: { title: string; body: string; userId: number }) => ({
        url: 'posts',
        method: 'POST',
        // credentials: 'include',
        body: newPost,
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    }),
    deletePost: builder.mutation({
      query: (id: number) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    }),
    updatePost: builder.mutation<
      TPost,
      { id: number; formData: Omit<TPost, 'id'> }
    >({
      query: ({ id, formData }) => ({
        url: `posts/${id}`,
        method: 'PUT',
        body: formData,
      }),
      invalidatesTags: (result, error, { id }) =>
        result
          ? [
              { type: 'Posts', id },
              { type: 'Posts', id: 'LIST' },
            ]
          : [
              {
                type: 'Posts',
                id: 'LIST',
              },
            ],
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllPostsQuery,
  useGetPostQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
  usePrefetch, // usePrefetch is a hook that can be used to trigger a query to be fetched in the background
} = postsApi;
