import React, { useContext } from "react";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import LanguagesBarLeft from "./LanguagesBarLeft";
import LanguagesBarRight from "./LanguagesBarRight";
import TranslateArea from "./TranslateArea";
import MainContext from "../../context/MainContext";
import DropdownContentLeft from "../DropdownContentLeft/DropdownContentLeft";
import DropdownContentRight from "../DropdownContentRight/DropdownContentRight";
import SwitchButton from "../SwitchButton/SwitchButton";
import clsx from "clsx";
import useStyles from "./styles";

const Translator = () => {
  const classes = useStyles();
  const theme = useTheme();
  const breakPoint = useMediaQuery(theme.breakpoints.up("lg"));
  const { languagesOpen } = useContext(MainContext);

  return (
    <div
      className={clsx(classes.translatorBox, {
        [classes.fullWidth]: !breakPoint,
        [classes.breakpointWidth]: breakPoint,
        [classes.translatorBoxshadow]:
          languagesOpen.left || languagesOpen.right,
      })}
    >
      <div
        className={clsx(classes.languagesBarDiv, {
          [classes.languagesBarDivShadow]:
            languagesOpen.left || languagesOpen.right,
        })}
      >
        <LanguagesBarLeft />
        <SwitchButton />
        <LanguagesBarRight />
      </div>
      {languagesOpen.left ? (
        <DropdownContentLeft />
      ) : languagesOpen.right ? (
        <DropdownContentRight />
      ) : (
        <div className={classes.textInputDiv}>
          <TranslateArea />
        </div>
      )}
    </div>
  );
};

export default Translator;
