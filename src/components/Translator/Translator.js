import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import { Tabs, Box, Divider } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import LanguagesBarLeft from "./LanguagesBarLeft";
import LanguagesBarRight from "./LanguagesBarRight";
import TextInputLeft from "./TextInputLeft";
import TextInputRight from "./TextInputRight";
import MainContext from "../../context/MainContext";
import DropdownContentLeft from "../DropdownContentLeft/DropdownContentLeft";
import DropdownContentRight from "../DropdownContentRight/DropdownContentRight";
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
        <LanguagesBarRight />
      </div>
      {languagesOpen.left ? (
        <DropdownContentLeft />
      ) : languagesOpen.right ? (
        <DropdownContentRight />
      ) : (
        <div className={classes.textInputDiv}>
          <TextInputLeft />
          <Divider orientation="vertical" flexItem />
          <TextInputRight />
        </div>
      )}
    </div>
  );
};

export default Translator;
