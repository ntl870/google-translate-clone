import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clientService } from "../../services/client";
import { Divider } from "@material-ui/core";
import MainContext from "../../context/MainContext";
import { langInfo } from "../../utils/langsInfo";
import useStyles from "./styles";
const TextInputLeft = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { inputLang, outputLang, storedInput } = useContext(MainContext);
  const [inputText, setInputText] = useState(storedInput);
  const [outputText, setOutputText] = useState("Translation");
  const [isTranslating, setTranslating] = useState(null);
  const reduxInputs = useSelector((state) => state.input);
  const translateText = async (q, source, target) => {
    if (inputText)
      if (source !== "detect")
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
      else
        try {
          setTranslating(true);
          const detectResponse = await clientService.detects(q);
          const { data: detection } = detectResponse;
          try {
            const { data } = await clientService.translate(
              q,
              detection[0].language,
              target
            );
            dispatch({
              type: "TRANSLATE",
              payload: {
                data: data.translatedText,
                text: q,
              },
            });
            const { name: detectedLangName } = langInfo.find((target) => {
              return target["code"] === detection[0].language;
            });
            let tempReduxInput = reduxInputs;
            tempReduxInput.langs[0].name = `${detectedLangName} - detected`;
            dispatch({ type: "INPUT", payload: { data: tempReduxInput } });
            setOutputText(data.translatedText);
          } catch (err) {
            console.log(err);
          }
        } catch (err) {
          console.log(err);
        } finally {
          setTranslating(false);
        }
    else {
      let tempReduxInput = reduxInputs;
      tempReduxInput.langs[0].name = "Languages Detection";
      dispatch({ type: "INPUT", payload: { data: tempReduxInput } });
      sessionStorage.setItem("input_text", JSON.stringify(""));
    }
  };

  useEffect(() => {
    const handleTranslate = setTimeout(() => {
      translateText(inputText, inputLang.code, outputLang.code);
    }, 200);
    return () => clearTimeout(handleTranslate);
  }, [inputText.trim(), inputLang.code, outputLang.code]);

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
