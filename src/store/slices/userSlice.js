import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { USER_API } from "../../constants";
import axios from "axios";

export const createUser = createAsyncThunk(
    'user/createUser',
    async (_, {getState}) => {
        const state = getState()
        const response = axios.post(`${USER_API}.json`, {
            username: state.user.userName,
            email: state.user.userEmail,
            password: state.user.userPassword
        })
        return response
    }
)

export const getUser = createAsyncThunk(
    'user/getUser',
    async () => {
        const userId = localStorage.getItem('sky-fitness-pro-userId')
        const response = await axios.get(`${USER_API}/${userId}.json`)
        return response.data
    }
)

export const updateUserCourses = createAsyncThunk(
    'user/updateUserCourses',
    async (_, {getState}) => {
        const userId = localStorage.getItem('sky-fitness-pro-userId')
        const state = getState()
        const updatedCourses = state.user.userCourses.reduce((acc, el, i) => {
            acc[i] = el
            return acc
        }, {})
        const response = await axios.patch(`${USER_API}/${userId}/courses.json`, updatedCourses)
        return response.data
    }

)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userName: null,
        userEmail: null,
        userPassword: null,
        user: {},
        isUser: false,
        message: '',
        status: '',
        auth: false,
        userCourses: []
    },
    reducers: {
        setUserName(state, action) {
            state.userName = action.payload
        },
        setUserEmail(state, action) {
            state.userEmail = action.payload
        },
        setUserPassword(state, action) {
            state.userPassword = action.payload
        },
        setIsUser(state, action) {
            state.isUser = action.payload
        },
        addCourse(state, action) {
            const check = state.userCourses.filter(el => el === action.payload)
            if(check.length) {
                return
            }
            state.userCourses.push(action.payload)   
        }
    },
    extraReducers: {
        [createUser.fulfilled]: (_, action) => {
            const { name } = action.payload.data
            localStorage.setItem('sky-fitness-pro-userId', name)
        },
        [getUser.fulfilled]: (state, action) => {
            const { username, password } = action.payload
            if(state.userName !== username || state.userPassword !== password){
                state.message = 'Неправильный логин или пароль'
                state.status = 'error'
                console.log('Неправильный логин или пароль');
                state.auth = false
                return
            }
            if(state.userName === username && state.userPassword === password){
                state.auth = true
                state.user = JSON.parse(JSON.stringify(action.payload))
                if(action.payload.courses) {
                    state.userCourses = Object.values(action.payload.courses)
                } 
            }
        },
        [updateUserCourses.pending]: (state) => {
            state.status = 'loading'
        },
        [updateUserCourses.fulfilled]: (state, action) => {
            const arr = Object.values(action.payload)
            state.user.courses = arr
            state.status = 'fulfilled'
        }
    }
})

export const { setUserEmail, setUserName, setUserPassword, setIsUser, addCourse } = userSlice.actions
export default userSlice.reducer