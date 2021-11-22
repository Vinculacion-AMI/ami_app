import React from 'react';
import ReactPlayer from 'react-player';
import './reproductor.css';
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid, Container } from "@material-ui/core";
import AppNavBar from "../../components/navbar";

import { useHistory } from "react-router-dom";
import { useStyles } from "../syllables/style";



function Reproductor() {
  let history = useHistory();

  const syllables = () => {
    history.push("/Monosyllables");
  };
  const alpha = () => {
    history.push("alphabet");
  };
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: "#6495ED", height: "13x  0vh", textAlign: "center" }}>
      <AppNavBar />
      <br></br>
      <br></br>
      <CardContent>
        <Typography className={classes.titleWord}>
          Vamos a aprender las monosílabas
        </Typography>
      </CardContent>
      <Grid>
        <Container fixed >
                  <CardContent style={{ backgroundColor: "#6495ED" }}>
                    <Typography gutterBottom variant="h5" component="h2" >
                      <div className="reproductor" >
                      <video width="750" height="500" controls>
                          <source src="../../../alphabet-song1.mp4" type="video/mp4" />
                      </video>                      
                      </div>
                    </Typography>
                  </CardContent>
        </Container>
      </Grid>
      <Button
        onClick={syllables}
        variant="contained"
        color="secondary"
        style={{ borderRadius: 50 }}
        className={classes.buttonCheck}>
        ¡Ordena la Palabra Monosílaba!
      </Button>
      <Button
        onClick={alpha}
        variant="contained"
        color="secondary"
        style={{ borderRadius: 50 }}
        className={classes.buttonCheck}>
        ¡Forma una Palabra Monosílaba!
      </Button>
    </div>
  );
}


export default Reproductor;

