import React from 'react';
import ReactPlayer from 'react-player';
import './reproductor.css';
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid, Container } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import { Carousel } from "react-responsive-carousel";
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
      <Grid

      >

        <Container fixed >
          <Grid spacing={2} container >
            <Grid item md={3} xs={1}></Grid>
            <Grid align="center" item xs={10} md={20} sm={12} >
              <Carousel dynamicHeight={true} emulateTouch={true} >
                <Card boxShadow={6} className={classes.root} >
                  <CardContent style={{ backgroundColor: "#6495ED" }}>
                    <Typography gutterBottom variant="h5" component="h2" >
                      <div className="reproductor" >
                        <ReactPlayer controls url='https://www.youtube.com/watch?v=TyOWmMUsJYU'></ReactPlayer>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
                <Card className={classes.root}>
                  <CardContent style={{ backgroundColor: "#6495ED" }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      <div className="reproductor">
                        <ReactPlayer controls url='https://www.youtube.com/watch?v=-sHbCdJ1xw8'></ReactPlayer>
                      </div>

                    </Typography>
                  </CardContent>
                </Card>
                <Card className={classes.root}>
                  <CardContent style={{ backgroundColor: "#6495ED" }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      <div className="reproductor">
                        <ReactPlayer controls url='https://www.youtube.com/watch?v=bO23pUTXyA4&t=8s&ab_channel=lunacreciente'></ReactPlayer>
                      </div>

                    </Typography>
                  </CardContent>
                </Card>
              </Carousel>
            </Grid>
          </Grid>
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