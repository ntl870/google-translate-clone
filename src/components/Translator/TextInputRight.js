import React from "react";
import useStyles from "./styles";
const TextInputRight = () => {
  const classes = useStyles();
  return (
    <div className={classes.textAreaDiv}>
      <textarea
        className={classes.textArea}
        disabled
        style={{ background: "white" }}
        placeholder="Translation"
      ></textarea>
    </div>
  );
};

export default TextInputRight;
