import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import CanvasDraw from "react-canvas-draw";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../../css/draw.css";
import { useHistory } from "react-router-dom";
import AppNavBar from "../../components/navbar";

function Draw4() {
  const [canvas] = useState("#4FA1F3 ");
  const [brush] = useState(6);
  const lienzo = useState(null);
  const lienzo1 = useState(null);
  let history = useHistory();

  const draw3 = () => {
    history.push("/draw3");
  };
  const draw5 = () => {
    history.push("/draw5");
  };

  const clear = () => {
    lienzo.current.clear();
    lienzo1.current.clear();
  };

  // const style = {
  //     width: brush + "px",
  //     background: canvas,
  //     marginLeft: "50%"
  //   };
  return (

    <div style={{ backgroundColor: "#6495ED", height: 900 }}>
      <AppNavBar />
      <Grid container>
        <Grid xs={12} sm={12}>
          <Grid style={{ margin: 8 }}>
            <Grid container>
              <Grid sm={2}>
                <Button
                  onClick={clear}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ width: 100 }}
                >
                  Limpiar
                </Button>
              </Grid>
              <Grid style={{ textAlign: "center" }} sm={8}>
                <h2 style={{ fontSize: 22 }}>Realiza las curvas</h2>
              </Grid>
              <Grid container sm={2}>
                <Grid xl={12} xs={12} md={12} sm={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={draw3}
                    style={{ width: 95 }}
                  >
                    Regresar
                  </Button>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={draw5}
                    style={{ width: 95 }}
                  >
                    Siguiente
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid style={{ margin: 5, textAlign: "center" }}>
              <center>
                <CanvasDraw
                  ref={lienzo1}
                  brushColor={canvas}
                  lazyRadius={1}
                  brushRadius={brush}
                  canvasHeight={345}
                  canvasWidth={655}
                  imgSrc="../../images/curva7.png"
                  hideGrid={false}
                  style={{ border: "2px solid #14181C" }}
                />
              </center>
            </Grid>
            <Grid style={{ textAlign: "center" }}>
              <center>
                <CanvasDraw
                  ref={lienzo}
                  brushColor={canvas}
                  lazyRadius={1}
                  brushRadius={brush}
                  canvasHeight={450}
                  canvasWidth={655}
                  imgSrc="../../images/curva8.png"
                  hideGrid={false}
                  style={{ border: "2px solid #14181C" }}
                />
              </center>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Draw4;
