import { Routes, Route } from "react-router-dom";
import { COURSE } from "./constants";
import AboutCourse from "./pages/AboutCourse";
import Main from "./pages/main";
import { Profile } from "./pages/profile";
import { Training }  from './pages/training/training'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/profile" element={<Profile />} />
      <Route
        path="/AboutCourse-yoga"
        element={<AboutCourse course={COURSE} />}
      />
      <Route path='/training' element={<Training/>} />
    </Routes>
  );
};
