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

export 

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userName: null,
        userEmail: null,
        userPassword: null,
        user: {},
        isUser: false,
        message: '',
        status: ''  
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
                return
            }
            if(state.userName === username && state.userPassword === password){
                state.auth = true
                const entries = Object.entries(action.payload)
                entries.forEach(arr => {
                    const [key, value] = arr
                    state.user[key] = value
                })
            }
        }
    }
})

export const { setUserEmail, setUserName, setUserPassword, setIsUser } = userSlice.actions
export default userSlice.reducer