import { makeStyles } from "@material-ui/styles";
export default makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    translatorBox: {
      margin: "0 auto",
      height: "221px",
      backgroundColor: "#fff",
      boxShadow: "0 1px 4px 0 rgba(0,0,0,0.37)",
      borderRadius: "8px",
      marginTop: "40px",
      display: "flex",
      flexDirection: "column",
    },
    fullWidth: {
      width: "100%",
    },
    breakpointWidth: {
      width: "67%",
    },
    languagesBarDiv: {
      display: "flex",
      flexDirection: "row",
    },
    textInputDiv: {
      display: "flex",
      flexDirection: "row",
      height: "173px",
    },
    textAreaDiv: {
      width: "50%",
      alignItems: "start",
      display: "flex",
      height: "120px",
    },
    textArea: {
      overflow: "hidden",
      border: "none",
      resize: "none",
      height: "100%",
      width: "100%",
      borderStyle: "none",
      borderColor: "transparent",
      borderRadius: "8px",
      outline: "none",
      paddingTop: "20px",
      paddingBottom: "20px",
      paddingLeft: "20px",
      paddingRight: "20px",
      fontSize: "1.6rem",
    },
  };
});
