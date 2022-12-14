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

export const getCoursesList = createAsyncThunk(
    'courses/getCoursesList',
    async (_, { getState }) => {
        const state = getState()
        const currentCourses = await Promise.all(
            state.user.userCourses.map(course => axios.get(`${COURSES_API}/${course}.json`))
        )
        return currentCourses.map(res => res.data)
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
        currentCourse: {},
        currentCourses: []
    },
    reducers: {
    },
    extraReducers: {
        [getAllCourses.fulfilled]:(state, action) => {
            state.allCourses = action.payload
        },
        [getCourseById.pending]: (state) => {
            state.status = 'loading'
        },
        [getCourseById.fulfilled]:(state, action) => {
            state.status = 'fulfilled'
            state.currentCourse = JSON.parse(JSON.stringify(action.payload))
        },
        [getCoursesList.fulfilled]:(state, action) => {
            state.currentCourses = action.payload
        }          
    }
})

export default coursesSlice.reducer