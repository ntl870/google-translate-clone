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
  const state = useSelector((state) => state.input);
  const { setInputTabID, setLanguagesOpen } = useContext(MainContext);
  const handleLanguages = (target) => {
    let tempState = state;

    if (tempState.langs.includes(target)) {
      tempState = {
        ...tempState,
        active: tempState.langs.indexOf(target),
      };
      setInputTabID(tempState.langs.indexOf(target));
      dispatch({ type: "INPUT", payload: { data: tempState } });
    } else {
      let clone = tempState.langs;
      switch (tempState.langs.length) {
        case 1:
          tempState = {
            active: 1,
            langs: [...tempState.langs, target],
          };
          break;
        case 2:
          clone[2] = target;
          tempState = {
            active: 1,
            langs: clone,
          };
          break;
        case 3:
          clone[2] = clone[1];
          clone[1] = target;
          tempState = {
            active: 1,
            langs: clone,
          };
          break;
        default:
      }
      setInputTabID(1);
      dispatch({ type: "INPUT", payload: { data: tempState } });
    }
    setLanguagesOpen((prev) => ({
      ...prev,
      left: false,
    }));
  };

  return (
    <div className={classes.mainDropdownContainer}>
      {langInfo.map((item) => {
        return (
          <Fragment key={item.code}>
            {isContained(state.langs, "name", item.name) ? (
              <Button
                onClick={() => handleLanguages(item)}
                className={classes.activeButton}
              >
                <DoneIcon />
                <Typography>{item.name}</Typography>
              </Button>
            ) : (
              <Button
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
