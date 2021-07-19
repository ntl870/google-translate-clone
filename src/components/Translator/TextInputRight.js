import React from "react";
import { useSelector } from "react-redux";
import useStyles from "./styles";
const TextInputRight = () => {
  const classes = useStyles();
  const translatedText = useSelector((state) => state.translated);
  console.log(translatedText);
  return (
    <div className={classes.textAreaDiv}>
      <textarea
        className={classes.textArea}
        disabled
        style={{ background: "white" }}
        placeholder={!translatedText ? "Translation" : translatedText}
      ></textarea>
    </div>
  );
};

export default TextInputRight;
