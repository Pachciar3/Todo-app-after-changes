import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import {
  NavLink,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setMenuOpen(open);
  };

  const classes = useStyles();
  const menuList = [
    {
      text: "Home",
      path: "/"
    },
    {
      text: "Todo",
      path: "/todo"
    }
  ]
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} onClick={toggleDrawer(true)} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography align="left" variant="h6" component="h1" className={classes.title}>
            Todo app
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
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
    </div>
  );
}

export default Header;
