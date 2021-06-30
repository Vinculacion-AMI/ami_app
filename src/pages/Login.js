import React, { useContext } from 'react';

import { Grid, form, TextField, Button, Card, } from "@material-ui/core";
import { Route, BrowserRouter as Router, Link, Redirect, useLocation, useHistory } from 'react-router-dom';
import { useHistory } from "react-router-dom";


function Login() {

  const [correo, setCorreo] = React.useState("");
  const [contrasena, setContrasena] = React.useState("");
  let history = useHistory();

  async function login() {
    if (correo === "" || contrasena === "") {
      alert("Registrate por favor")
    } else {
      let data = { correo, contrasena };

      history.push("/levels")
    }

  }

  return (
    <div>
      <Grid container   >
        <Grid sm={4}>
        </Grid>
        <Grid
          style={{
            textAlign: 'center',
            padding: 20, marginTop: 40
          }}
          className="card" xs={12} sm={4}>
          <Card width="300" justifyContent="center" >
            <h1>Bienvenidos</h1>
            <br></br>
            <form noValidate>

              <Grid container >

                <Grid style={{ margin: 20 }} xs={12} >

                  <TextField
                    value={correo}
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    label="Email"
                    autoFocus
                    onChange={(e) => setCorreo(e.target.value)}
                  />
                </Grid>

                <Grid style={{ margin: 20 }} xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    value={contrasena}
                    label="Contraseña"
                    type="password"
                    onChange={(e) => setContrasena(e.target.value)}
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid xs={4}>

                </Grid>
              </Grid>
              <Grid style={{ margin: 20, }}>
                <Button
                  onClick={login}

                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ borderRadius: 20 }}
                >
                  Ingresar
                </Button>
              </Grid>

              <Grid container justify="center">
                <Grid >
                  <Link href="/signup" variant="body2">
                    Aun no tienes cuenta??
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Card>
        </Grid>
        <Grid sm={4}>

        </Grid>

      </Grid>

    </div>

  );
}

export default Login;