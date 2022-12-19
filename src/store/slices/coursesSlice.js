import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { COURSES_API } from "../../constants";

export const getAllCourses = createAsyncThunk(
    'courses/getAllCourses',
    async () => {
        const response = await axios.get(`${COURSES_API}.json`)
        const responseArray = Object.values(response.data)
        return responseArray
    }
)


export const getCourseById = createAsyncThunk(
    'courses/getCourseById',
    async (id) => {
        const response = await axios.get(`${COURSES_API}/${id}.json`)
        return response.data
    }
)

const coursesSlice = createSlice({
    name: 'courses',
    initialState: {
        allCourses: [],
        currentCourse: {}
    },
    reducers: {
    },
    extraReducers: {
        [getAllCourses.fulfilled]:(state, action) => {
            state.allCourses = action.payload
        },
        [getCourseById.fulfilled]:(state, action) => {
            state.currentCourse = action.payload
        }          
    }
})

export default coursesSlice.reducer