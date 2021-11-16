import React from 'react';
import ReactPlayer from 'react-player';
import './reproductor.css';
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AppNavBar from "../../components/navbar";

import { useHistory } from "react-router-dom";


function Reproductor(){
  let history = useHistory();
  const Monosyllables = () => {
    history.push("/Monosyllables");
  };
  
  return  (
    <div>
      <div style={{ backgroundColor: "#6495ED", height: "13x  0vh" }}>
        <AppNavBar />
    <>
    <CardContent>
      <Typography gutterBottom variant="h3" component="h1">
        Vamos a aprender las monosilabas
      </Typography>
      
    </CardContent><div className="reproductor">
        <ReactPlayer controls url='https://www.youtube.com/watch?v=bq6Ek-BYOhY&t=16s'></ReactPlayer>
      </div>
      <Button
        onClick={Monosyllables}
        variant="contained"
        color="secondary"
        style={{ borderRadius: 50 }}>
          Vamos a practicar
        </Button>
        </> 
    </div>
    </div>
  );
  
}

export default Reproductor;