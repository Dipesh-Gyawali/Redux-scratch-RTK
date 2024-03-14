import { useSelector } from "react-redux";
import { Navigate } from "react-router";

// Higher-order component for role-based routing
export const RoleRoute = ({ allowedRoles, children }) => {
  //admin le sabai access garna pauxa
  //user le product matra acccess garna paudaina

  const role = useSelector((state: any) => state.authentication.user?.role);
  console.log(role, "role: admin or user");

  const userRole = role;

  // const userRole = "user";

  if (allowedRoles.includes(userRole)) {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
};
