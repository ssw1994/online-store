import { Typography, Button, Drawer, Icon } from "@mui/material";
import React from "react";
import { Menu } from "../../shared/components/Menu/Menu";
import { Submenu } from "./Submenu";
import "./NavBar.css";

/**
 * @author
 * @function NavBar
 **/

export const NavBar = (props) => {
  const categoryItems = [
    { title: "mens", isActive: false, id: 1 },
    { title: "womens", isActive: false, id: 2 },
    { title: "chidrens", isActive: false, id: 3 },
    { title: "t-shirts", isActive: false, id: 4 },
    { title: "sports", isActive: false, id: 5 },
    { title: "casuals", isActive: false, id: 6 },
    { title: "jeans", isActive: false, id: 7 },
  ];
  const [categories, updateCategory] = React.useState(categoryItems);
  const [openMenu, setOpenMenu] = React.useState(false);

  const closeMenu = () => {
    setOpenMenu(false);
  };
  const makeActiveCategory = (category) => {
    let c = [...categories];
    c = c.map((item) => {
      if (category.id === item.id) {
        return { ...item, isActive: true };
      } else {
        return { ...item, isActive: false };
      }
    });
    updateCategory([...c]);
  };

  return (
    <nav className="nav-bar">
      <Drawer open={openMenu}>
        <Menu close={closeMenu} />
      </Drawer>
      <Button onClick={() => setOpenMenu(true)}>
        <i className="fa-solid fa-bars"></i>
      </Button>
      <div className="menus">
        {categories.map((category) => {
          return (
            <>
              <Button
                key={category.title}
                className={category.isActive ? "active nav-link" : "nav-link"}
                onClick={() => makeActiveCategory(category)}
              >
                <Typography>{category.title}</Typography>
              </Button>

              {/* {category.isActive && (
                <div className="submenus">
                  <Submenu category={category} />
                </div>
              )} */}
            </>
          );
        })}
      </div>
    </nav>
  );
};
