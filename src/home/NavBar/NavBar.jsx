import { Typography, Button, Drawer, Icon } from "@mui/material";
import React from "react";
import { Menu } from "../../shared/components/Menu/Menu";
import "./NavBar.css";

/**
 * @author
 * @function NavBar
 **/

export const NavBar = (props) => {
  const categories = [
    "mens",
    "womens",
    "chidrens",
    "t-shirts",
    "sports",
    "casuals",
    "jeans",
  ];

  const [openMenu, setOpenMenu] = React.useState(false);

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <nav className="nav-bar">
      <Drawer open={openMenu}>
        <Menu close={closeMenu} />
      </Drawer>
      <Button onClick={() => setOpenMenu(true)}>
        <i className="fa-solid fa-bars"></i>
      </Button>
      {categories.map((category) => {
        return (
          <Button href="/men" className="nav-link" key={category}>
            <Typography>{category}</Typography>
          </Button>
        );
      })}
    </nav>
  );
};
