import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TRAININGS_API, COURSES_API, EXERCISE_API } from "../../constants";

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
       const exercises = response.data.exercise
       const exercisesList = await Promise.all(
        exercises.map(str => axios.get(`${EXERCISE_API}/${str}.json`))
       )
       return {
        training: response.data,
        list: exercisesList.map(el => el.data)
       }
    }
)

const trainingsSlice = createSlice({
    name: 'trainings',
    initialState: {
        trainingList: [],
        exercisesList: [],
        currentTraining: {},
        currentTrainingNumber: null
    },
    reducers: {
        setCurrentTrainingNumber(state, action) {
            state.currentTrainingNumber = action.payload
        }
    },
    extraReducers: {
        [getTraining.fulfilled]:(state, action) => {
            const entries = Object.entries(action.payload.training)
            entries.forEach(arr => {
                const [key, value] = arr
                state.currentTraining[key] = value
            })
            state.exercisesList = action.payload.list
        },
        [getTrainingList.fulfilled]:(state, action) => {
            state.trainingList = action.payload
        },
    }
})

export const { setCurrentTrainingNumber } = trainingsSlice.actions
export default trainingsSlice.reducer