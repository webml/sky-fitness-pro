import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./components/Protectet-eout/Protectet-eout";
import AboutCourse from "./pages/AboutCourse";
import Main from "./pages/main";
import { NotFound } from "./pages/not-found/NotFound";
import { Profile } from "./pages/profile";
import { Training } from "./pages/training/training";

export const AppRoutes = () => {
  const user = true
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route
          path="/AboutCourse"
          element={<AboutCourse />}
        />
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/profile" element={<Profile />} />
        
        <Route path="/training" element={<Training />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
