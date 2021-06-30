import Color from "color";
import { makeStyles } from "@material-ui/core/styles";
// let colors = [
//   "#FFC300",
//   "#2ECC71",
//   "#BEE37B",
//   "#FF5733",
//   "#884EA0",
//   "#3498DB",
//   "#2980B9",
// ];

export const useGridStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
    width: "95%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const useStyles = makeStyles((theme) => ({
  titleWord: {
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      fontSize: 15,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 30,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 30,
    },
  },
  actionArea: {
    borderRadius: 14,
    transition: "0.3s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  card: ({ color }) => ({
    borderRadius: 14,
    boxShadow: "none",

    "&:hover": {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },

    [theme.breakpoints.down("sm")]: {
      minWidth: window.screen.width / 4,
    },
    [theme.breakpoints.up("md")]: {
      minWidth: window.screen.width / 4,
    },
    [theme.breakpoints.up("lg")]: {
      minWidth: window.screen.width / 5,
      maxWidth: "100%",
    },
  }),
  buttonCheck: {
    // color:'#ffffff' ,
    margin: theme.spacing(2),
    backgroundColor: "#F3F3F3",
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    color: "white",
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 10,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 20,
    },
  },
  cardMinSize: ({ color }) => ({
    borderRadius: 14,
    boxShadow: "none",

    "&:hover": {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },

    [theme.breakpoints.down("sm")]: {
      minWidth: window.screen.width / 4,
    },
    [theme.breakpoints.up("md")]: {
      minWidth: window.screen.width / 4,
    },
    [theme.breakpoints.up("lg")]: {
      minWidth: window.screen.width / 5,
      maxWidth: "100%",
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,

      [theme.breakpoints.down("sm")]: {
        padding: "0.8rem 1rem 1rem",
      },
      [theme.breakpoints.up("md")]: {
        padding: "1rem 1.5rem 1.5rem",
      },
      [theme.breakpoints.up("lg")]: {
        padding: "1rem 1.5rem 1.5rem",
      },
    };
  },
  titleCard: {
    fontFamily: "Montserrat, sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2rem",
    },
    color: "#fff",
    textTransform: "uppercase",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Keania One",
    color: "#fff",
    textTransform: "uppercase",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
