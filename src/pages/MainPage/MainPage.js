import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Translator from "../../components/Translator/Translator";
import MainContext from "../../context/MainContext";
import useStyles from "./styles";
const MainPage = () => {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
  return (
    <MainContext.Provider
      value={{
        isOpen: isOpen,
        setOpen: (e) => setOpen(e),
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
