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
      <div className="banner-message">
        <h2>Shop now</h2>
      </div>
      <Link to="auth">Login</Link>
    </header>
  );
};
