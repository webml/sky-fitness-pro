import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { COURSES_API } from "../constants";

export const getAllCourses = createAsyncThunk(
    'courses/getAllCourses',
    async () => {
        const response = await axios.get(`${COURSES_API}/courses.json`)
        const responseArray = Object.values(response.data)
        return responseArray
    }
)

const coursesSlice = createSlice({
    name: 'courses',
    initialState: {
        allCourses: []
    },
    reducers: {

    },
    extraReducers: {
        [getAllCourses.fulfilled]:(state, action) => {
            state.allCourses = action.payload
        }          
    }
})

export default coursesSlice.reducer