import { makeStyles } from "@material-ui/styles";
export default makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    translatorBox: {
      margin: "0 auto",
      height: "241px",
      backgroundColor: "#fff",
      marginTop: "40px",
      boxShadow: "0 1px 4px 0 rgba(0,0,0,0.37)",
      borderRadius: "8px",
      display: "flex",
      flexDirection: "column",
    },
    translatorBoxshadow: {
      boxShadow: "0 0px 0px 0 rgba(0,0,0,0.37)",
    },
    fullWidth: {
      width: "100%",
    },
    breakpointWidth: {
      width: "67%",
    },
    languagesBar: {
      width: "50%",
      borderBottom: "1px solid rgba(0,0,0,0.12)",
      display: "flex",
      flexDirection: "row",
    },
    languagesBarDiv: {
      display: "flex",
      flexDirection: "row",
      borderTopLeftRadius: "8px",
      borderTopRightRadius: "8px",
    },
    languagesBarDivShadow: {
      boxShadow: "0 1px 4px 0 rgba(0,0,0,0.37)",
    },
    textInputDiv: {
      display: "flex",
      flexDirection: "row",
      height: "193px",
    },
    textAreaDiv: {
      width: "50%",
      alignItems: "start",
      display: "flex",
      height: "140px",
    },
    textArea: {
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
      marginBottom: "-20px",
      fontSize: "1.6rem",
    },
    dropdownButton: {
      boxShadow: "0px 0px 0px 0px #ffffff",
    },
    backgroundColor: "white !important",
  };
});
