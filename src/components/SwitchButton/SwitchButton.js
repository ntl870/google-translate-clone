import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import MainContext from "../../context/MainContext";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";

const SwitchButton = () => {
  const { inputLang, outputLang, setInputTabID, setOutputTabID } =
    useContext(MainContext);
  const dispatch = useDispatch();
  const outputRedux = useSelector((state) => state.output);
  const inputRedux = useSelector((state) => state.input);
  const isDisabled =
    inputLang.code === "detect" || inputLang.code === outputLang.code;

  const isIncluded = (array, target) => {
    return array.filter((item) => item.code === target.code).length === 1;
  };

  const handleSwitch = () => {
    const sourceLang = inputRedux.langs[inputRedux.active];
    const targetLang = outputRedux.langs[outputRedux.active];
    if (
      isIncluded(inputRedux.langs, targetLang) &&
      isIncluded(outputRedux.langs, sourceLang)
    ) {
      if (inputRedux.active === 1) inputRedux.active = 2;
      else inputRedux.active = 1;
      outputRedux.active = outputRedux.langs.indexOf(
        outputRedux.langs.find((item) => item.code === sourceLang.code)
      );
      dispatch({ type: "INPUT", payload: { data: inputRedux } });
      dispatch({ type: "OUTPUT", payload: { data: outputRedux } });
      setInputTabID(inputRedux.active);
      setOutputTabID(outputRedux.active);
    }

    if (
      isIncluded(inputRedux.langs, targetLang) &&
      !isIncluded(outputRedux.langs, sourceLang)
    ) {
      if (inputRedux.active === 1) inputRedux.active = 2;
      else inputRedux.active = 1;
      if (outputRedux.langs.length <= 2) {
        outputRedux.langs.unshift(sourceLang);
        outputRedux.active = 0;
      } else {
        outputRedux.langs.pop();
        outputRedux.langs.unshift(sourceLang);
        outputRedux.active = 0;
      }

      dispatch({ type: "INPUT", payload: { data: inputRedux } });
      dispatch({ type: "OUTPUT", payload: { data: outputRedux } });
      setInputTabID(inputRedux.active);
      setOutputTabID(outputRedux.active);
    }

    if (
      !isIncluded(inputRedux.langs, targetLang) &&
      isIncluded(outputRedux.langs, sourceLang)
    ) {
      inputRedux.langs[2] = inputRedux.langs[1];
      inputRedux.langs[1] = targetLang;
      inputRedux.active = 1;
      outputRedux.active = outputRedux.langs.indexOf(
        outputRedux.langs.find((item) => item.code === sourceLang.code)
      );
      dispatch({ type: "INPUT", payload: { data: inputRedux } });
      dispatch({ type: "OUTPUT", payload: { data: outputRedux } });
      setInputTabID(inputRedux.active);
      setOutputTabID(outputRedux.active);
    }

    if (
      !isIncluded(inputRedux.langs, targetLang) &&
      !isIncluded(outputRedux.langs, sourceLang)
    ) {
      inputRedux.langs[2] = inputRedux.langs[1];
      inputRedux.langs[1] = targetLang;
      inputRedux.active = 1;

      outputRedux.langs.pop();
      outputRedux.langs.unshift(sourceLang);
      outputRedux.active = 0;

      dispatch({ type: "INPUT", payload: { data: inputRedux } });
      dispatch({ type: "OUTPUT", payload: { data: outputRedux } });
      setInputTabID(inputRedux.active);
      setOutputTabID(outputRedux.active);
    }
  };

  return (
    <Button
      style={{
        minWidth: "49px",
        height: "49px",
        borderRadius: "50%",
      }}
      disabled={isDisabled}
      onClick={handleSwitch}
    >
      <SwapHorizIcon />
    </Button>
  );
};
export default SwitchButton;
