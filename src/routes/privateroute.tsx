import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated);
  console.log(isAuthenticated, "isAuthentication");

  return isAuthenticated ? <Outlet></Outlet> : <Navigate to="/login" />

};


// export const PrivateRoute = ({token}) => {
//   console.log("2")

//   return token ? <Outlet></Outlet> : <Navigate to="/login" />
// }
