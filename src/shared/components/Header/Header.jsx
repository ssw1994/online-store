import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
/**
 * @author
 * @function
 **/

export const Header = (props) => {
  return (
    <header>
      <Link to="auth">Login</Link>
    </header>
  );
};
