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

function App() {
  return (
    <VarientContext.Provider value={config.variant}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route path="/" element={<HomeRouter />}></Route>
            </Route>
            <Route path="/auth" element={<AuthLayout />}>
              <Route path="login" element={<Login />}></Route>
              <Route path="register" element={<Register />}></Route>
            </Route>
          </Routes>
        </Router>
      </div>
    </VarientContext.Provider>
  );
}

export default App;
