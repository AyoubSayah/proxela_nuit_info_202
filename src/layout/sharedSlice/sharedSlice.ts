import { createSlice } from '@reduxjs/toolkit'

const SharedState: any = {
  modalInfo: false,
  modalError: false,
  modalSuccess: false,
  messageInfo: '',
  messageError: '',
  messageSuccess: '',
}
export const SharedSlice = createSlice({
  name: 'shared',
  initialState: SharedState,
  reducers: {
    openModalInfo: (state, payload) => {
      state.modalInfo = true
      state.messageInfo = payload.payload.message
    },
    closeModalInfo: (state) => {
      state.modalInfo = false
      state.messageInfo = ''
    },
    openModalError: (state, payload) => {
      state.modalError = true
      state.messageError = payload.payload.message
    },
    closeModalError: (state) => {
      state.modalError = false
      state.messageError = ''
    },
    openModalSuccess: (state, payload) => {
      state.modalSuccess = true
      state.messageSuccess = payload.payload.message
    },
    closeModalSuccess: (state) => {
      state.modalSuccess = false
      state.messageSuccess = ''
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

export const selectModalSucess = (state) => state.shared.modalSuccess
export const selectModalError = (state) => state.shared.modalError
export const selectModalInfo = (state) => state.shared.modalInfo
export const selectMessageSucess = (state) => state.shared.messageSuccess
export const selectMessageError = (state) => state.shared.messageError
export const selectMessageInfo = (state) => state.shared.messageInfo
export const {
  closeModalError,
  closeModalInfo,
  closeModalSuccess,
  openModalError,
  openModalInfo,
  openModalSuccess,
} = SharedSlice.actions
export default SharedSlice.reducer
