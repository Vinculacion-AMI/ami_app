import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import CanvasDraw from "react-canvas-draw";
import { useHistory } from "react-router-dom";
import AppNavBar from "../../components/navbar";

function Draw5() {
  const [canvas] = useState("#4FA1F3 ");
  const [brush] = useState(6);
  const lienzo = useState(null);
  let history = useHistory();

  const draw4 = () => {
    history.push("/draw4");
  };

  const clear = () => {
    lienzo.current.clear();
  };

  return (

    <div style={{ backgroundColor: "#6495ED", height: "100vh"}}>
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
              <Grid sm={8} style={{ textAlign: "center" }}>
                <h2> Realiza el Espiral</h2>
              </Grid>
              <Grid sm={2}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={draw4}
                  style={{ width: 100 }}
                >
                  Regresar
                </Button>
              </Grid>
            </Grid>

            <Grid style={{ textAlign: "center" }}>
              <h2> </h2>
            </Grid>
            <center>
              <CanvasDraw
                ref={lienzo}
                lazyRadius={1}
                brushColor={canvas}
                brushRadius={brush}
                canvasHeight={590}
                canvasWidth={800}
                hideGrid={false}
                imgSrc="../../images/espiral6.jpg"
                style={{ border: "2px solid #14181C" }}
              />
            </center>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Draw5;
