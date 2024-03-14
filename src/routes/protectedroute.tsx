import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router";

export const ProtectedRoute = () => {
    const isAuthenticated = useSelector((state: any) => state.authentication.isAuthenticated)
    console.log(isAuthenticated, "isAuthentication");

    return isAuthenticated ? <Navigate to="/"></Navigate> : <Outlet></Outlet> 

}
