import { createSlice } from '@reduxjs/toolkit'
import { globalApi } from '../../../app/globalAsync'
export function GetToken() {
  const token = localStorage.getItem('token')
  if (token != null) return token
  return null
}
const token = GetToken()
const auth: any = {
  token: token,
}
export const authSlice = createSlice({
  name: 'auth',
  initialState: auth,
  reducers: {
    signIn: (state, action) => {
      state.token = action.payload

      localStorage.setItem('token', action.payload)
    },
    signOut: (state) => {
      state.token = ''
      state.nom = ''
      localStorage.removeItem('token')
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      authAsyncSlice.endpoints.login.matchFulfilled,
      (state, action) => {
        if (action.payload.token) {
          state.token = action.payload.token

          localStorage.setItem('token', action.payload.token)
        }
      }
    )
  },
})

export const authAsyncSlice = globalApi.injectEndpoints({
  endpoints: (build) => ({
    signup: build.mutation({
      query: (data) => ({
        url: 'auth/register',
        method: 'POST',
        body: data,
      }),
    }),
    confirmCode: build.mutation({
      query: (data) => ({
        url: 'auth/check-Confirmation-Code',
        method: 'POST',
        body: data,
      }),
    }),
    resendCode: build.mutation({
      query: (data) => ({
        url: 'auth/send-verification',
        method: 'POST',
        body: data,
      }),
    }),
    login: build.mutation({
      query: (data) => ({
        url: 'auth/login',
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const selectToken = (state) => state.authentification.token
export const { signOut, signIn } = authSlice.actions
export const {
  useSignupMutation,
  useConfirmCodeMutation,
  useResendCodeMutation,
  useLoginMutation,
} = authAsyncSlice

export default authSlice.reducer
