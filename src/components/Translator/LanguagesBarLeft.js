import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "@material-ui/core";
const LanguagesBarLeft = () => {
  const [tabID, setTabID] = useState(0);
  const handleChange = (e, id) => {
    setTabID(id);
  };
  return (
    <div style={{ width: "50%" }}>
      <Tabs
        value={tabID}
        onChange={(e, id) => handleChange(e, id)}
        aria-label="simple tabs example"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </div>
  );
};

export default LanguagesBarLeft;
