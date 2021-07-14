import React, { useContext, useState } from "react";
import { AppBar, Toolbar, IconButton, Link, Avatar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MainContext from "../../context/MainContext";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const { setOpen } = useContext(MainContext);
  const [isHover, setHover] = useState(false);
  return (
    <AppBar className={classes.appBar} elevation={0}>
      <Toolbar className={classes.navToolBar}>
        <div className={classes.leftNavBar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Link
            href="/"
            className={classes.logoLink}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <img
              alt="logo"
              src={
                isHover ? "/image/google_underline.png" : "/image/google.png"
              }
              className={classes.logo}
            />
          </Link>
        </div>
        <Avatar src="/image/google2.png"></Avatar>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
