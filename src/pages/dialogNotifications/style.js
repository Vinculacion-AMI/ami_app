import { makeStyles } from "@material-ui/core/styles";
let colors = [
  "#FFC300",
  "#2ECC71",
  "#BEE37B",
  "#FF5733",
  "#884EA0",
  "#3498DB",
  "#2980B9",
];
let titleColor = colors[Math.floor(Math.random() * colors.length)];
export const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: 500,
        backgroundColor: 'transparent',
          boxShadow: 'none',
        '& > svg': {
            margin: theme.spacing(2),
          },
      },
      media: {
        height: 120,
        background: "#42C3E5",
      },
      svgDialogStyle: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
      iconSuccess: {
         padding: theme.spacing(1),
         color: "#2ECC71",
    [theme.breakpoints.down('sm')]: {
      fontSize: 250
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 400
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 500,
      
    },
      },
      iconFinish: {
        padding: theme.spacing(1),
        color: "#FFC300",
   [theme.breakpoints.down('sm')]: {
     fontSize: 250
   },
   [theme.breakpoints.up('md')]: {
     fontSize: 400
   },
   [theme.breakpoints.up('lg')]: {
     fontSize: 500,
     
   },
     },
      iconWrong: {
        padding: theme.spacing(1),
        color: " #FF5733",
   [theme.breakpoints.down('sm')]: {
     fontSize: 250
   },
   [theme.breakpoints.up('md')]: {
     fontSize: 400
   },
   [theme.breakpoints.up('lg')]: {
     fontSize: 500,
     
   },
     },
     rootDialog: {
      backgroundColor: "transparent"
    },
  
    paper: {
      backgroundColor: "transparent",
      boxShadow: "none",
      overflow: "hidden"
    },
    titleWord: {
      color: titleColor,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
  
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
    boxTitle: {
      backgroundColor: 'rgba(255,255,255,0.5)'
  
  
    }
    
}));