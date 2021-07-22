import React, { useContext } from "react";
import { Tabs, Tab, Fab, useMediaQuery, Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
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
  const theme = useTheme();
  const breakPoint = useMediaQuery(theme.breakpoints.up("md"));
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
    if (inputTabID === 0)
      if (id === 0)
        setLanguagesOpen((prev) => ({
          ...prev,
          left: !prev.left,
        }));
      else
        setLanguagesOpen((prev) => ({
          ...prev,
          left: false,
        }));

    setInputTabID(id);
    let tempState = state;
    tempState.active = id;
    if (id !== 0) tempState.langs[0].name = "Languages Detection";
    dispatch({ type: "INPUT", payload: { data: tempState } });
  };

  return (
    <div className={classes.languagesBar}>
      {breakPoint ? (
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
                label={<strong>{item.name}</strong>}
                key={item.code}
              />
            );
          })}
        </Tabs>
      ) : (
        <Button
          onClick={handleDropButton}
          className={classes.breakPointButton}
          color="primary"
        >
          <strong>{state.langs[state.active].name}</strong>
        </Button>
      )}
      {breakPoint && (
        <div className={classes.center} style={{ marginLeft: "15px" }}>
          <Fab
            className={classes.dropdownButton}
            onClick={handleDropButton}
            elevation={0}
            size="small"
          >
            {languagesOpen.left ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Fab>
        </div>
      )}
    </div>
  );
};

export default LanguagesBarLeft;
