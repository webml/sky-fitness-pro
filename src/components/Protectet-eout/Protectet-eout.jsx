import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const ProtectedRoute = ({ redirectPath = '/' }) => {
    const { auth } = useSelector(state => state.user)

    if (!auth) {
        return <Navigate to={redirectPath} replace={true} />
    }

    return <Outlet />
}
