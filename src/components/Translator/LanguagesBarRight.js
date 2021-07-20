import React, { useContext } from "react";
import { Tabs, Tab, Fab } from "@material-ui/core";
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
