import { makeStyles } from "@material-ui/styles";
export default makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  upperBackground:{
    position: "absolute",
    height: "163px",
    top: "0px",
    zIndex: "-1",
    width: "100%",
    background: "#fafafa",
    borderBottom: "1px solid rgba(0,0,0,0.12)",
  }
}));
