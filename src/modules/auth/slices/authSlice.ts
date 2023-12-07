import { createSlice } from '@reduxjs/toolkit'
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
    signOut: (state) => {
      state.token = ''
      state.nom = ''
      localStorage.removeItem('token')
    },
  },
  extraReducers(builder) {
    // builder.addMatcher(
    //   asyncAuthSlice.endpoints.authentification.matchFulfilled,
    //   (state, action) => {
    //     state.token = action.payload.jwt;
    //     const UserjwT = GetNom(action.payload.jwt);
    //     state.nom = UserjwT.sub;
    //     state.role = UserjwT.role;
    //     state.department = UserjwT.department;
    //     localStorage.setItem("token", action.payload.jwt);
    //   }
    // );
  },
})

export const selectToken = (state) => state.authentification.token
export const { signOut } = authSlice.actions
export default authSlice.reducer
