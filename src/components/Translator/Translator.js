import React, { useState, useEffect, useLayoutEffect } from "react";
import { Tabs, Box, Divider } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import LanguagesBarLeft from "./LanguagesBarLeft";
import LanguagesBarRight from "./LanguagesBarRight";
import TextInputLeft from "./TextInputLeft";
import TextInputRight from "./TextInputRight";
import clsx from "clsx";
import useStyles from "./styles";
const Translator = () => {
  const classes = useStyles();
  const theme = useTheme();
  const breakPoint = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div
      className={clsx(classes.translatorBox, {
        [classes.fullWidth]: !breakPoint,
        [classes.breakpointWidth]: breakPoint,
      })}
    >
      <div className={classes.languagesBarDiv}>
        <LanguagesBarLeft />
        <LanguagesBarRight />
      </div>

      <div className={classes.textInputDiv}>
        <TextInputLeft />
        <Divider orientation="vertical" flexItem />
        <TextInputRight />
      </div>
    </div>
  );
};

export default Translator;
