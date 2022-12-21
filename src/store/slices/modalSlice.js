import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        modalActive: false
    },
    reducers: {
        modalHandler(state){
            state.modalActive = !state.modalActive
        }
    }
})

export const { modalHandler } = modalSlice.actions
export default modalSlice.reducer