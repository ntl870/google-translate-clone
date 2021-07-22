import { makeStyles } from "@material-ui/styles";

export default makeStyles(() => ({
  root: {
    display: "flex",
  },
  mainDropdownContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: "10px",
    paddingBottom: "10px",
    background: "#fff",
    boxShadow: "0 1px 4px 0 rgba(0,0,0,0.37)",
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
    zIndex: 1,
  },
  regularButton: {
    width: "40%",
    margin: "0 auto",
    marginTop: "0px",
    marginBottom: "0px",
  },
  activeButton: {
    backgroundColor: "#e8f0fe",
    width: "40%",
    margin: "0 auto",
    marginTop: "0px",
    marginBottom: "0px",
    "&:hover": {
      backgroundColor: "#e8f0fe",
    },
  },
}));
