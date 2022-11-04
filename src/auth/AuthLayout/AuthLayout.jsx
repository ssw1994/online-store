import React from "react";
import { Outlet, useNavigate } from "react-router";
import "./AuthLayout.css";
/**
 * @author
 * @function AuthLayout
 **/

export const AuthLayout = (props) => {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate("/auth/login");
  }, []);
  return (
    <div className="auth">
      <Outlet />
    </div>
  );
};
