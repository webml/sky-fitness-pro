import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TRAININGS_API, COURSES_API } from "../../constants";

export const getTrainingList = createAsyncThunk(
    'trainings/getTrainingList',
    async (id) => {
        const course = await axios.get(`${COURSES_API}/${id}.json`)
        const { workouts } = course.data
        const trainings = await Promise.all(
            workouts.map(el => axios.get(`${TRAININGS_API}/${el}.json`))
        )
        return trainings.map(training => training.data) 
    }
)

export const getTraining = createAsyncThunk(
    'trainings/getTraining',
    async (id) => {
       const response = await axios.get(`${TRAININGS_API}/${id}.json`)
       return response.data 
    }
)

const trainingsSlice = createSlice({
    name: 'trainings',
    initialState: {
        trainingList: [],
        currentTraining: null
    },
    reducers: {
    
    },
    extraReducers: {
        [getTraining.fulfilled]:(state, action) => {
            state.currentTraining = action.payload
        },
        [getTrainingList.fulfilled]:(state, action) => {
            state.trainingList = action.payload
        }
    }
})

export default trainingsSlice.reducer