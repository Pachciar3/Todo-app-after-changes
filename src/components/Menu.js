import React from "react";
import {
  NavLink,
} from "react-router-dom";

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const menuList = [
  {
    text: "Home",
    path: "/"
  },
  {
    text: "Todo",
    path: "/todo"
  }
];

function Menu({ menuOpen, toggleDrawer }) {
  return (
    <Drawer anchor="left" open={menuOpen} onClose={toggleDrawer(false)}>
      <div
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {menuList.map((el) => (
            <NavLink to={el.path}>
              <ListItem button key={el.text}>
                <ListItemText>{el.text}</ListItemText>
              </ListItem>
            </NavLink>
          ))}
        </List>
      </div>
    </Drawer>
  );
}

export default Menu;
