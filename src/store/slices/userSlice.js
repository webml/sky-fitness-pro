import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  token: null,
  id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

// initialState: {
//         username: "sergey.petrov96",
//         firstName: "Сергей",
//         lastName: "Петров",
//         email: "sergey.petrov96@mail.ru",
//         password: "4fkhdj880d",
//         courses: [
//             "ab1c3f",
//             "fgfr54u2",
//             "qw4req21"
//         ],
//         completedWorkouts: [
//             "19bc41fc",
//             "3c9f0628"
//         ]
//     },
