import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { store } from './store'

const BASEURL = import.meta.env.VITE_API_URL
export const globalApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASEURL,
    prepareHeaders: (headers) => {
      if (store?.getState()?.authentification.token) {
        headers?.set(
          'authorization',
          `Bearer ${store.getState().authentification.token}`
        )
      }

      return headers
    },
  }),

  endpoints: () => ({}),
})
