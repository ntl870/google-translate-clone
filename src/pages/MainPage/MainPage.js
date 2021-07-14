import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import MainContext from "../../context/MainContext";
const MainPage = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <MainContext.Provider
      value={{
        isOpen: isOpen,
        setOpen: (e) => setOpen(e),
      }}
    >
      <MainContext.Consumer>
        {() => (
          <>
            <SideDrawer />
            <Navbar />
          </>
        )}
      </MainContext.Consumer>
    </MainContext.Provider>
  );
};

export default MainPage;
