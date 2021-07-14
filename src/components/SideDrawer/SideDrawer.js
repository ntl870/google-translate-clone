import React, { useContext, useState } from "react";
import { Drawer, Typography, Link, Button, Divider } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import MainContext from "../../context/MainContext";
import useStyles from "./styles";
const SideDrawer = () => {
  const { isOpen, setOpen } = useContext(MainContext);
  const classes = useStyles();
  const githubURL = "https://github.com/ntl870";
  const facebookURL = "https://facebook.com/ntlong870";
  const currentYear = new Date().getFullYear();
  const [isHover, setHover] = useState(false);
  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(false);
  };
  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={isOpen}
      onClose={(e) => toggleDrawer(e)}
      BackdropProps={{ invisible: true }}
    >
      <Link
        href="/"
        className={classes.logoLink}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          alt="logo"
          src={isHover ? "/image/google_underline.png" : "/image/google.png"}
          className={classes.logo}
        />
      </Link>
      <div className={classes.sideDrawerContent}>
        <Button
          className={classes.linkButton}
          variant="contained"
          style={{ backgroundColor: "rgb(51,51,51)", marginTop: "20px" }}
          href={githubURL}
          target="#"
        >
          <GitHubIcon style={{ color: "white" }} />
        </Button>
        <Divider style={{ backgroundColor: "red" }} />
        <Button
          className={classes.linkButton}
          variant="contained"
          style={{ backgroundColor: "#4242f7" }}
          href={facebookURL}
          target="#"
        >
          <FacebookIcon style={{ color: "white" }} />
        </Button>
        <div className={classes.infoText}>
          <Typography variant="h6">
            <strong>Long Nguyen</strong>
          </Typography>
          <Typography variant="p">{currentYear}</Typography>
        </div>
      </div>
    </Drawer>
  );
};

export default SideDrawer;
