import React from "react";
import { Route, Routes } from "react-router";
import { HomeLayout } from "../Layout/HomeLayout";

/**
 * @author
 * @function HomeRouter
 **/

export const HomeRouter = (props) => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}></Route>
    </Routes>
  );
};
