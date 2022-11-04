import { Button } from "@mui/material";
import React from "react";

/**
 * @author
 * @function NavBar
 **/

export const Menu = (props) => {
  return (
    <div>
      Menu
      <Button onClick={() => props.close()}>
        <i className="fa-solid fa-close"></i>
      </Button>
    </div>
  );
};
