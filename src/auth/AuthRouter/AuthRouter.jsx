import React from "react";
import { Route, Routes } from "react-router";
import { AuthLayout } from "../AuthLayout/AuthLayout";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";

/**
 * @author
 * @function AuthRouter
 **/

export const AuthRouter = (props) => {
  return (
    <Routes>
      <Route path="auth" element={<AuthLayout />}></Route>
    </Routes>
  );
};
