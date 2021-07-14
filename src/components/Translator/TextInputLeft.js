import React from "react";
import useStyles from "./styles";
const TextInputLeft = () => {
  const classes = useStyles();
  return (
    <div className={classes.textAreaDiv}>
      <textarea className={classes.textArea}></textarea>
    </div>
  );
};

export default TextInputLeft;
