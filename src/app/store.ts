import { configureStore } from '@reduxjs/toolkit'
import { SharedSlice } from '../layout/sharedSlice/sharedSlice'
import { authAsyncSlice, authSlice } from '../modules/auth/slices/authSlice'
import { landingAsyncSlice } from '../modules/home/slices/landingAsyncSlice'
import { PostSlice } from '../modules/posts/slices/PostSlice'
import { globalApi } from './globalAsync'

export const store = configureStore({
  reducer: {
    [globalApi.reducerPath]: globalApi.reducer,
    authentification: authSlice.reducer,

    shared: SharedSlice.reducer,
    post: PostSlice.reducer,
    authASync: authAsyncSlice.reducer,
    landing: landingAsyncSlice.reducer,

    // [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(globalApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
