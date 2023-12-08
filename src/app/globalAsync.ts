import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASEURL = import.meta.env.VITE_API_URL
export const globalApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASEURL,
    prepareHeaders: (headers, { getState }) => {
      if (getState()?.authentification.token) {
        headers?.set(
          'authorization',
          `Bearer ${getState().authentification.token}`
        )
      }

      return headers
    },
  }),

  endpoints: () => ({}),
})
