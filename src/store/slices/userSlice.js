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

export 

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userName: null,
        userEmail: null,
        userPassword: null, 
        user: {
            username: "sergey.petrov96",
            firstName: "Сергей",
            lastName: "Петров",
            email: "sergey.petrov96@mail.ru",
            password: "4fkhdj880d",
            courses:{
                ab1c3f: {},
                fgfr54u2: {},
                qw4req21: {}
            }
        },
        auth: true,
        isUser: false  
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
        }
    }
})

export const { setUserEmail, setUserName, setUserPassword, setIsUser } = userSlice.actions
export default userSlice.reducer