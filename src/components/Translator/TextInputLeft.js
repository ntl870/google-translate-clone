import React, { useState, useEffect, useContext } from "react";
import { clientService } from "../../services/client";
import MainContext from "../../context/MainContext";
import useStyles from "./styles";
const TextInputLeft = () => {
  const classes = useStyles();
  const [inputText, setInputText] = useState("");
  const { inputLang, outputLang } = useContext(MainContext);
  console.log(inputLang,outputLang);
  const translateText = async (q, source, target) => {
    try {
      const { data } = await clientService.translate(q, source, target);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    translateText(inputText, inputLang, outputLang);
  }, [inputText]);
  return (
    <div className={classes.textAreaDiv}>
      <textarea
        className={classes.textArea}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></textarea>
    </div>
  );
};

export default TextInputLeft;
