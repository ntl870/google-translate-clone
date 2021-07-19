import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Translator from "../../components/Translator/Translator";
import MainContext from "../../context/MainContext";
import { useSelector } from "react-redux";
import useStyles from "./styles";
const MainPage = () => {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
  const inputState = useSelector((state) => state.input);
  const [inputTabID, setInputTabID] = useState(inputState.active);
  const outputState = useSelector((state) => state.output);
  const [outputTabID, setOutputTabID] = useState(outputState.active);
  const [languagesOpen, setLanguagesOpen] = useState({
    left: false,
    right: false,
  });
  return (
    <MainContext.Provider
      value={{
        isOpen: isOpen,
        setOpen: (e) => setOpen(e),
        languagesOpen: languagesOpen,
        setLanguagesOpen: (e) => setLanguagesOpen(e),
        inputTabID: inputTabID,
        setInputTabID: (e) => setInputTabID(e),
        outputTabID: outputTabID,
        setOutputTabID: (e) => setOutputTabID(e),
        inputLang: inputState.langs[inputState.active],
        outputLang: outputState.langs[outputState.active],
      }}
    >
      <div className={classes.upperBackground}></div>
      <MainContext.Consumer>
        {() => (
          <>
            <Navbar />
            <SideDrawer />
            <Translator />
          </>
        )}
      </MainContext.Consumer>
    </MainContext.Provider>
  );
};

export default MainPage;
