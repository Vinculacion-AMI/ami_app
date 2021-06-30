import { makeStyles } from "@material-ui/core/styles";
let colors = [
  "#005792",
  "#b6c9f0",
  "#34656d",
  "#0061a8",
  "#45526c",
  "#325288",
  "#77acf1",
];
let color1 = colors[Math.floor(Math.random() * colors.length)];
let color2 = colors[Math.floor(Math.random() * colors.length)];
export const useStyles = makeStyles((theme) => ({
  button: {
    "& > *": {
      margin: theme.spacing(1),
    },
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  root: {
    margin: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  rootEmptyCard: {
    margin: theme.spacing(3),
    maxWidth: "80%",
    maxHeight: "80%",
    minHeight: "80%",
    minWidth: "80%",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  rootCard: {
    marginTop: theme.spacing(3),
    margin: theme.spacing(1),
    maxWidth: "80%",
    maxHeight: "80%",
    minHeight: "80%",
    minWidth: "80%",
    background: `linear-gradient(45deg, ${color1} 70%, ${color2} 30%)`,
    boxShadow: "0 3px 5px 2px rgba(130, 255, 105, .3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 80,
    color: "withe",
  },
  titleWord: {
    color: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 40,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 50,
    },
  },
  rootGrid: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
  buttonCheck: {
    margin: theme.spacing(1),
    backgroundColor: "#2ECC71 ",
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    color: "black",
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 30,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 40,
    },
  },
}));
