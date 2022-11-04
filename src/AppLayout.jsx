import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";
import { Footer } from "./shared/components/Footer/Footer";
import { Header } from "./shared/components/Header/Header";

/**
 * @author
 * @function AppLayout
 **/

export const AppLayout = (props) => {
  return (
    <Container className="app-container">
      <Header />
      <div className="app-body">
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
};
