import { configureStore } from "@reduxjs/toolkit";
import coursesSlice from "./coursesSlice";

export default configureStore({
    reducer: {
        courses: coursesSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})