import React, { useState, useEffect, useContext } from "react";
import { Tabs, Tab, Button, Fab } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MainContext from "../../context/MainContext";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "./styles";

const LanguagesBarLeft = () => {
  const classes = useStyles();
  const { languagesOpen, setLanguagesOpen, inputTabID, setInputTabID } =
    useContext(MainContext);
  const state = useSelector((state) => state.input);
  const dispatch = useDispatch();

  const handleDropButton = () => {
    if (languagesOpen.right)
      setLanguagesOpen((prev) => ({
        ...prev,
        right: false,
      }));
    else
      setLanguagesOpen((prev) => ({
        ...prev,
        left: !prev.left,
      }));
  };

  const handleTabID = (e, id) => {
    let tempState = state;
    tempState.active = id;
    setInputTabID(id);
    dispatch({ type: "INPUT", payload: { data: tempState } });
  };

  return (
    <div className={classes.languagesBar}>
      <Tabs
        value={inputTabID}
        onChange={(e, id) => handleTabID(e, id)}
        indicatorColor="primary"
        textColor="primary"
      >
        {state.langs.map((item) => {
          return (
            <Tab
              style={{ minWidth: "auto" }}
              label={<strong>{item}</strong>}
              key={item}
            />
          );
        })}
      </Tabs>
      <div className={classes.center} style={{ marginLeft: "15px" }}>
        <Fab
          aria-label="Add"
          className={classes.dropdownButton}
          onClick={handleDropButton}
          elevation={0}
          size="small"
        >
          {languagesOpen.left ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Fab>
      </div>
    </div>
  );
};

export default LanguagesBarLeft;
