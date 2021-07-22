import { makeStyles } from "@material-ui/styles";

export default makeStyles(() => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "white",
    borderBottom: "2px solid rgba(0,0,0,0.1)",
    display: "flex",
  },
  menuButton: {
    marginRight: "5px",
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    height: "30px",
  },
  leftNavBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  logoLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  navToolBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));
