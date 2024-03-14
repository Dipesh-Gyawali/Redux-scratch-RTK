import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";

import "./_login.scss";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogin = () => {
    dispatch(login({ id: "1", name: "dipesh", role: "admin" }));

    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="text-password-container">
        <input type="text" />
        <input type="password" />
        <button onClick={handleLogin}>Log in</button>
      </div>
    </div>
  );
};
