import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import { Grid} from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
    width: "60%",
    paddingTop: "60.25%",
    // paddingRight: "20%",
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

function LearnSyllabes() {
  const classes = useStyles();

  const img = [
    { photo: ["../../../images/fonemas/FonemaT.jpeg"] },
    { photo: ["../../../images/fonemas/FonemaM.jpeg"] },
    { photo: ["../../../images/fonemas/FonemaP.jpeg"] },
    { photo: ["../../../images/fonemas/FonemaL.jpeg"] },
    { photo: ["../../../images/fonemas/FonemaC.jpeg"] },
    { photo: ["../../../images/fonemas/FonemaD.jpeg"] },
    { photo: ["../../../images/fonemas/FonemaF.jpeg"] },
    { photo: ["../../../images/fonemas/FonemaN.jpeg"] },
    { photo: ["../../../images/fonemas/FonemaS.jpeg"] },
    { photo: ["../../../images/fonemas/FonemaB.jpeg"] },
  ];

  return (
    <div>
      <div style={{ backgroundColor: "#6495ED", height: "13x  0vh" }}>
        <AppNavBar />

        <Grid container>
          <Grid
            style={{ textAlign: "center", alignItems: "center" }}
            xs={12}
            sm={12}
          >
            <h2>Aprende las silabas</h2>
            <Grid style={{marginLeft:75, marginRight:75}}>
              <Carousel emulateTouch={true}>
                {img.map((e) => (
                  <Card className={classes.root}>
                    <CardMedia className={classes.media} image={e.photo}/>
                  </Card>
                ))}
              </Carousel>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default LearnSyllabes;
