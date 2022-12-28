import { configureStore } from "@reduxjs/toolkit";
import coursesSlice from "./slices/coursesSlice";
import trainingsSlice from "./slices/trainingsSlice";
import userSlice from "./slices/userSlice";
import modalSlice from "./slices/modalSlice";
import authSlice from "./slices/authSlice";

export default configureStore({
  reducer: {
    courses: coursesSlice,
    trainings: trainingsSlice,
    user: userSlice,
    modal: modalSlice,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
