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
    { photo: ["../../../images/0001.jpg"] },
    { photo: ["../../../images/letra a-1.png"] },
    { photo: ["../../../images/letra b.png"] },
    { photo: ["../../../images/Letra b-1.png"] },
    { photo: ["../../../images/Letra c.png"] },
    { photo: ["../../../images/Letra c-1.png"] },
    { photo: ["../../../images/Letra d.png"] },
    { photo: ["../../../images/Letrad-1.png"] },
    { photo: ["../../../images/E1.png"] },
    { photo: ["../../../images/E.png"] },
    { photo: ["../../../images/F1.png"] },
    { photo: ["../../../images/F.png"] },
    { photo: ["../../../images/G1.png"] },
    { photo: ["../../../images/G.png"] },
    { photo: ["../../../images/H1.png"] },
    { photo: ["../../../images/H.png"] },
    { photo: ["../../../images/abc9.png"] },
    { photo: ["../../../images/Iguana.jpg"] }, 
    { photo: ["../../../images/abc10.png"] },
    { photo: ["../../../images/jarabe.jpg"] }, 
    { photo: ["../../../images/abc11.png"] },
    { photo: ["../../../images/kinder.jpg"] },
    { photo: ["../../../images/abc12.png"] },
    { photo: ["../../../images/lobo.jpg"] },
    { photo: ["../../../images/abc13.png"] },
    { photo: ["../../../images/letraM.png"] },
    { photo: ["../../../images/abc14.png"] },
    { photo: ["../../../images/letraN.png"] },
    { photo: ["../../../images/abc15.png"] },
    { photo: ["../../../images/letrañ.png"] },
    { photo: ["../../../images/abc16.png"] },
    { photo: ["../../../images/letrao.png"] },
    { photo: ["../../../images/abc17.png"] },
    { photo: ["../../../images/letraP.png"] },
    { photo: ["../../../images/abc18.png"] },
    { photo: ["../../../images/letraQ.png"] },
    { photo: ["../../../images/abc19.png"] },
    { photo: ["../../../images/letraR.png"] },
    { photo: ["../../../images/abc20.png"] },
    { photo: ["../../../images/letraS.png"] },
    { photo: ["../../../images/abc21.png"] },
    { photo: ["../../../images/LetraT.PNG"] },
    { photo: ["../../../images/abc22.png"] },
    { photo: ["../../../images/letrau.PNG"] },
    { photo: ["../../../images/abc23.png"] },
    { photo: ["../../../images/letraV.PNG"] },
    { photo: ["../../../images/abc24.png"] },
    { photo: ["../../../images/letraw.jpeg"] },
    { photo: ["../../../images/abc25.png"] },
    { photo: ["../../../images/letrax.jpeg"] },
    { photo: ["../../../images/abc26.png"] },
    { photo: ["../../../images/letray.jpeg"] },
    { photo: ["../../../images/abc27.png"] },
    { photo: ["../../../images/letraz.jpeg"] },
    { photo: ["../../../images/abecedario.jpg"] },

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
