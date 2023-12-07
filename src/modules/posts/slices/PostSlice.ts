import { globalApi } from '../../../app/globalAsync'

export const PostSlice = globalApi.injectEndpoints({
  endpoints: (build) => ({
    getPost: build.query<any[], any>({
      query: () => ({
        url: 'post',
      }),
      providesTags: ['NEWPOST'],
    }),
    addNewPost: build.mutation({
      query: (data) => ({
        url: 'post',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['NEWPOST'],
    }),
    addImage: build.mutation({
      query: (data) => ({
        url: 'upload',
        method: 'POST',
        body: data,
        type: 'formData',
      }),
    }),
    LikePost: build.mutation({
      query: (data) => ({
        url: 'reaction',
        method: 'POST',
        body: data,
      }),
    }),
    getComments: build.query<any[], any>({
      query: (data) => ({
        url: 'post/comments',
        method: 'POST',
        body: data,
      }),
    }),
    addComment: build.mutation({
      query: (data) => ({
        url: 'post/comment',
        method: 'POST',
        body: data,
      }),
    }),
    getLikes: build.query({
      query: (data) => ({
        url: 'reaction/' + data,
      }),
    }),
  }),
})
export const {
  useAddImageMutation,
  useAddNewPostMutation,
  useGetPostQuery,
  useLikePostMutation,
  useLazyGetCommentsQuery,
  useAddCommentMutation,
  useGetLikesQuery,
} = PostSlice
