import React, { useContext, Fragment } from "react";
import { Button, Typography } from "@material-ui/core";
import { langInfo } from "../../utils/langsInfo";
import { useSelector, useDispatch } from "react-redux";
import MainContext from "../../context/MainContext";
import DoneIcon from "@material-ui/icons/Done";
import { isContained } from "../../utils/isContained";
import useStyles from "./styles";

const DropdownContentLeft = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const state = useSelector((state) => state.output);
  const { setOutputTabID, setLanguagesOpen } = useContext(MainContext);
  const handleLanguages = (target) => {
    let tempState = state;
    if (tempState.langs.includes(target)) {
      tempState = {
        ...tempState,
        active: tempState.langs.indexOf(target),
      };
      setOutputTabID(tempState.langs.indexOf(target));
      dispatch({ type: "OUTPUT", payload: { data: tempState } });
    } else {
      if (tempState.langs.length <= 2) {
        tempState = {
          active: 1,
          langs: [target, ...tempState.langs],
        };
      } else {
        let clone = tempState.langs;
        clone.pop();
        clone.unshift(target);
        tempState = {
          active: 0,
          langs: clone,
        };
      }
      setOutputTabID(0);
      dispatch({ type: "OUTPUT", payload: { data: tempState } });
    }
    setLanguagesOpen((prev) => ({
      ...prev,
      right: false,
    }));
  };

  return (
    <div className={classes.mainDropdownContainer}>
      {langInfo.map((item) => {
        return (
          <Fragment key={item.code}>
            {isContained(state.langs, "name", item.name) ? (
              <Button
                key={item.code}
                onClick={() => handleLanguages(item)}
                className={classes.activeButton}
              >
                <DoneIcon />
                <Typography>{item.name}</Typography>
              </Button>
            ) : (
              <Button
                key={item.code}
                onClick={() => handleLanguages(item)}
                className={classes.regularButton}
              >
                <Typography>{item.name}</Typography>
              </Button>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default DropdownContentLeft;
