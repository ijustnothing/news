import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/',
  }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: (skipValue) => ({
        url: `posts?limit=10&skip=${skipValue}`,
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      merge: (currentCache, newItems) => {
        currentCache.posts.push(...newItems.posts)
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
    }),
  }),
})

export const { useGetNewsQuery } = newsApi

export default newsApi
