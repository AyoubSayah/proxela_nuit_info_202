import { configureStore } from '@reduxjs/toolkit'
import { globalApi } from './globalAsync'

import { authAsyncSlice, authSlice } from '../modules/auth/slices/authSlice'
import { SharedSlice } from '../layout/sharedSlice/sharedSlice'
import { PostSlice } from '../modules/posts/slices/PostSlice'
import { landingAsyncSlice } from '../modules/home/slices/landingAsyncSlice'

export const store = configureStore({
  reducer: {
    [globalApi.reducerPath]: globalApi.reducer,
    authentification: authSlice.reducer,
    shared: SharedSlice.reducer,
    post: PostSlice.reducer,
    landing: landingAsyncSlice.reducer,
    authASync: authAsyncSlice.reducer,

    // [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(globalApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
