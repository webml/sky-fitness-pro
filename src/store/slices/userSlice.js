import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: "sergey.petrov96",
        firstName: "Сергей",
        lastName: "Петров",
        email: "sergey.petrov96@mail.ru",
        password: "4fkhdj880d",
        courses: [
            "ab1c3f",
            "fgfr54u2",
            "qw4req21"
        ],
        completedWorkouts: [
            "19bc41fc",
            "3c9f0628"
        ] 
    },
    reducers: {
    }
})

export const { setUserActiveCourse } = userSlice.actions
export default userSlice.reducer