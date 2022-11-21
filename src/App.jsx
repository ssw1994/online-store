import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeRouter } from "./home/HomeRouter/HomeRouter";
import { AppLayout } from "./AppLayout";
import { AuthLayout } from "./auth/AuthLayout/AuthLayout";
import { Login } from "./auth/Login/Login";
import { Register } from "./auth/Register/Register";
import { VarientContext } from "./shared/contexts";
import config from "./config";
import { useState } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import BlogApp from "./tutorails/BlogApp/BlogApp";

export const App = () => {
  return (
    <div>
      <BlogApp />
    </div>
  );
};
export default App;
