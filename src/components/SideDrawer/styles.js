import { makeStyles } from "@material-ui/styles";
const sideDrawerWidth = 280;
export default makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  sideDrawerContent: {
    flexShrink: 0,
    whiteSpace: "nowrap",
    width: sideDrawerWidth,
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
    height: "calc(100% - 70px)",
  },
  linkButton: {
    width: "80% !important",
    marginBottom: "10px",
  },
  logoLink: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  logo: {
    height: "30px",
  },
  infoText: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
}));
