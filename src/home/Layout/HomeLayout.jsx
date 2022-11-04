import { Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";
import { NavBar } from "../NavBar/NavBar";
import "./HomeLayout.css";
/**
 * @author
 * @function HomeLayout
 **/

export const HomeLayout = (props) => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};
