import React, { useState, useEffect, useContext, useCallback } from "react";
import { useDispatch } from "react-redux";
import { clientService } from "../../services/client";
import { Divider } from "@material-ui/core";
import MainContext from "../../context/MainContext";
import useStyles from "./styles";
const TextInputLeft = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { inputLang, outputLang, storedInput } = useContext(MainContext);
  const [inputText, setInputText] = useState(storedInput);
  const [outputText, setOutputText] = useState("Translation");
  const [isTranslating, setTranslating] = useState(null);
  // const handleTranslate = useCallback(() => {
  //   const translateText = async (q, source, target) => {
  //     if (inputText)
  //       try {
  //         const { data } = await clientService.translate(q, source, target);
  //         dispatch({
  //           type: "TRANSLATE",
  //           payload: {
  //             data: data.translatedText,
  //             text: q,
  //           },
  //         });
  //         setOutputText(data.translatedText);
  //       } catch (err) {
  //         console.log(err);
  //       } finally {
  //       }
  //   };
  //   translateText(inputText, inputLang.code, outputLang.code);
  // }, [inputText, inputLang.code, outputLang.code, dispatch]);

  const translateText = async (q, source, target) => {
    if (inputText)
      try {
        setTranslating(true);
        const { data } = await clientService.translate(q, source, target);
        dispatch({
          type: "TRANSLATE",
          payload: {
            data: data.translatedText,
            text: q,
          },
        });
        setOutputText(data.translatedText);
      } catch (err) {
        console.log(err);
      } finally {
        setTranslating(false);
      }
  };
  useEffect(() => {
    const handleTranslate = setTimeout(() => {
      translateText(inputText, inputLang.code, outputLang.code);
    }, 200);
    return () => clearTimeout(handleTranslate);
  }, [inputText, inputLang.code, outputLang.code]);
  return (
    <>
      <div className={classes.textAreaDiv}>
        <textarea
          className={classes.textArea}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
      </div>
      <Divider orientation="vertical" flexItem />
      <div className={classes.textAreaDiv}>
        <textarea
          className={classes.textArea}
          disabled
          style={{ background: "white" }}
          value={isTranslating ? "Translating..." : outputText}
        ></textarea>
      </div>
    </>
  );
};

export default TextInputLeft;
