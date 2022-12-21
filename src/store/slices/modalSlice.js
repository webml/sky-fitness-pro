import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        modalActive: false,
        currentModal: ''
    },
    reducers: {
        modalHandler(state){
            state.modalActive = !state.modalActive
        },
        setCurrentModal(state, action){
            state.currentModal = action.payload
        }
    }
})

export const { modalHandler, setCurrentModal } = modalSlice.actions
export default modalSlice.reducer