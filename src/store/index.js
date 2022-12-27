import { configureStore } from "@reduxjs/toolkit";
import coursesSlice from "./slices/coursesSlice";
import trainingsSlice from "./slices/trainingsSlice";
import userSlice from "./slices/userSlice";
import modalSlice from "./slices/modalSlice";

export default configureStore({
    reducer: {
        courses: coursesSlice,
        trainings: trainingsSlice,
        user: userSlice,
        modal: modalSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})