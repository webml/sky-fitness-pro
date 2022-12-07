import { Routes, Route } from 'react-router-dom'
import { Training }  from './pages/training/training'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Training/>}
            />

        </Routes>
    )
}