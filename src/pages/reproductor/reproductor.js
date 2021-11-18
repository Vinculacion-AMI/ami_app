import React from 'react';
import ReactPlayer from 'react-player';
import './reproductor.css';
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AppNavBar from "../../components/navbar";

import { useHistory } from "react-router-dom";
import { useStyles } from "../syllables/style";



function Reproductor(){
  let history = useHistory();
  
  const syllables = () => {
    history.push("/Monosyllables");
  };
  const classes = useStyles();
  
  return  (
    <div>
      <div style={{ backgroundColor: "#6495ED", height: "13x  0vh", textAlign: "center"}}>
        <AppNavBar />
    <>
    <br></br>
    <CardContent>
      <Typography  className={classes.titleWord}>
        Vamos a aprender las monosílabas
      </Typography>

    </CardContent><div className="reproductor">
        <ReactPlayer controls url='https://www.youtube.com/watch?v=bO23pUTXyA4&t=8s&ab_channel=lunacreciente'></ReactPlayer>
      </div>
      <br></br>
      <Button
        onClick={syllables}
        variant="contained"
        color="secondary"
        style={{ borderRadius: 50 }}
        className={classes.buttonCheck}>
          ¡Ahora a practicar!
        </Button>
        </> 
    </div>
    </div>
  );
  
}

export default Reproductor;