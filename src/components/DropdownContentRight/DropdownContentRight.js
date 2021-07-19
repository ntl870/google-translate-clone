import React, { useContext } from "react";
import { Button, Typography, useMediaQuery } from "@material-ui/core";
import { langInfo } from "../../utils/langsInfo";
import { useSelector, useDispatch } from "react-redux";
import MainContext from "../../context/MainContext";
import DoneIcon from "@material-ui/icons/Done";
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
      switch (tempState.langs.length) {
        case 1:
          tempState = {
            active: 1,
            langs: [...tempState.langs, target],
          };
          setOutputTabID(1);
          break;
        case 2:
          tempState = {
            active: 2,
            langs: [...tempState.langs, target],
          };
          setOutputTabID(2);
          break;
        case 3:
          let clone = tempState.langs;
          clone.shift();
          clone.unshift(target);
          tempState = {
            active: 0,
            langs: clone,
          };
          setOutputTabID(0);
          break;
        default:
      }
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
          <>
            {state.langs.includes(item.name) ? (
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
          </>
        );
      })}
    </div>
  );
};

export default DropdownContentLeft;
