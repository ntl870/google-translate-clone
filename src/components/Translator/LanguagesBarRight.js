import React, { useContext } from "react";
import { Tabs, Tab, Fab, useMediaQuery, Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MainContext from "../../context/MainContext";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "./styles";
const LanguagesBarRight = () => {
  const classes = useStyles();
  const { languagesOpen, setLanguagesOpen, outputTabID, setOutputTabID } =
    useContext(MainContext);
  const state = useSelector((state) => state.output);
  const dispatch = useDispatch();
  const theme = useTheme();
  const breakPoint = useMediaQuery(theme.breakpoints.up("md"));
  const handleDropButton = () => {
    if (languagesOpen.left)
      setLanguagesOpen((prev) => ({
        ...prev,
        left: false,
      }));
    else
      setLanguagesOpen((prev) => ({
        ...prev,
        right: !prev.right,
      }));
  };

  const handleTabID = (e, id) => {
    let tempState = state;
    tempState.active = id;
    setOutputTabID(id);
    dispatch({ type: "OUTPUT", payload: { data: tempState } });
  };

  return (
    <div className={classes.languagesBar}>
      {breakPoint ? (
        <Tabs
          value={outputTabID}
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

      <div className={classes.center} style={{ marginLeft: "15px" }}>
        <Fab
          aria-label="Add"
          className={classes.dropdownButton}
          onClick={handleDropButton}
          elevation={0}
          size="small"
        >
          {languagesOpen.right ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Fab>
      </div>
    </div>
  );
};

export default LanguagesBarRight;
