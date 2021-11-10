import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import { Grid, Button } from "@material-ui/core";
import CanvasDraw from "react-canvas-draw";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../../css/draw.css";
import AppNavBar from "../../components/navbar";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  media: {
    height: 0,
    width: "100%",
    paddingTop: "60.25%",
  },
  ancho: {
    margin: 10,
    maxWidth: "100%",
  },
  btn: {
    justifyContent: "center",
    left: "20%",
  },
});

function Draw() {
  const classes = useStyles();
  const [canvas] = useState("#4FA1F3 ");
  const [brush] = useState(6);
  const lienzo = useState(null);

  const clear = () => {
    lienzo.current.clear();
  };
  const heightResponsive = window.innerHeight < 45 ? 450 : 350;

  const img = [
    { photo: ["../../../images/letraA.jpeg"] },
    { photo: ["../../../images/letraB.jpeg"] },
    { photo: ["../../../images/letraC.jpeg"] },
    { photo: ["../../../images/letraD.jpeg"] },
    { photo: ["../../../images/E1.png"] },
    { photo: ["../../../images/E.png"] },
    { photo: ["../../../images/F1.png"] },
    { photo: ["../../../images/F.png"] },
    { photo: ["../../../images/G1.png"] },
    { photo: ["../../../images/G.png"] },
    { photo: ["../../../images/H1.png"] },
    { photo: ["../../../images/H.png"] },
    { photo: ["../../../images/letraI.png"] },
    { photo: ["../../../images/letraJ.png"] },
    { photo: ["../../../images/letraK.png"] },
    { photo: ["../../../images/letraL.png"] },
    { photo: ["../../../images/letraLl.png"] },
    { photo: ["../../../images/letram.png"] },
    { photo: ["../../../images/letran.png"] },
    { photo: ["../../../images/letrañ.png"] },
    { photo: ["../../../images/letrao.png"] },
    { photo: ["../../../images/abc17.png"] },
    { photo: ["../../../images/letraP.png"] },
    { photo: ["../../../images/abc18.png"] },
    { photo: ["../../../images/letraQ.png"] },
    { photo: ["../../../images/abc19.png"] },
    { photo: ["../../../images/letraR.png"] },
    { photo: ["../../../images/abc20.png"] },
    { photo: ["../../../images/letraS.png"] },
    { photo: ["../../../images/LetraT.PNG"] },
    { photo: ["../../../images/letrau.PNG"] },
    { photo: ["../../../images/letraV.PNG"] },
    { photo: ["../../../images/letraw.PNG"] },
    { photo: ["../../../images/letrax.PNG"] },
    { photo: ["../../../images/letray.PNG"] },
    { photo: ["../../../images/letraz.PNG"] },
  ];

  return (
    <div style={{ backgroundColor: "#6495ED", height: "100vh" }}>
      <AppNavBar />
      <Grid container alignItems="center">
        <Grid container style={{ margin: 8 }} xs={12} sm={12}>
          <Grid style={{ textAlign: "center" }} xs={6} sm={6}>
            <h2>Replica</h2>
          </Grid>
          <Grid container alignItems="center" xs={6} sm={6}>
            <Grid item xs={12} sm={12}>
              <Button
                onClick={clear}
                className={classes.btn}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ width: 100 }}
              >
                Limpiar
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          style={{ textAlign: "center", alignItems: "center" }}
          xs={12}
          sm={6}
        >
          <Grid style={{ margin: 25, position: "relative" }}>
            <Carousel emulateTouch={true} onChange={clear}>
              {img.map((e) => (
                <Card className={classes.root}>
                  <CardMedia className={classes.media} image={e.photo} />
                </Card>
              ))}
            </Carousel>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Grid style={{ position: "relative" }}>
            <Card style={{ border: "2px solid #14181C" }}>
              <CanvasDraw
                ref={lienzo}
                lazyRadius={1}
                brushColor={canvas}
                brushRadius={brush}
                canvasHeight={heightResponsive}
                canvasWidth={"100%"}
                hideGrid={false}
              />
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Draw;
