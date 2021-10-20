import React from "react";
import "../css/singin.css";
import { Grid, TextField, Button, Card, Container } from "@material-ui/core";
import { useHistory } from "react-router";
import Swal from "sweetalert2";

//import { makeStyles } from "@material-ui/core/styles";

import SaveIcon from "@material-ui/icons/Save";

const validateEmail = (values) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(values)) {
    return false;
  } else {
    return true;
  }
};

function Registro() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  let history = useHistory();

  const statusdisable =
    email.length === 0 ||
      name.length === 0 ||
      password.length === 0 ||
      validateEmail(email)
      ? true
      : false;

  const errorMessageNombre =
    name.length === 0 ? "El nombre es obligatorio" : "";

  const errorMessagePass =
    password.length === 0 ? "La contraseña es obligatoria" : "";

  const errorMessage =
    email.length === 0
      ? "El email es obligatorio"
      : validateEmail(email) === true
        ? "El email no es válido"
        : "";

  const helperTextProps = {
    error: true,
  };

  function goLogin() {
    history.push("/home");
  }

  async function signup() {
    if (name === "" || email === "" || password === "") {
      alert("Registrate por favor");
    } else {
      let data = { name, email, password };
      console.warn(data);
      let result = await fetch(process.env.REACT_APP_BACKEND + "/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      result = await result.json();
      if (result.status === 200) {
        Swal.fire({
          // position: "top-end",
          icon: "success",
          imageUrl: "/images/alertas/ok1.png",
          imageWidth: 150,
          imageHeight: 150,
          title: result.message,
          showConfirmButton: false,
          width: "22rem",
          timer: 2500,
          background: "#E6E6FA",
          // background: '#ffff url(/images/alertas/ok1.png) center no-repeat ',
        }).then((state) => {
          if (state.dismiss === Swal.DismissReason.timer || state.isDismissed) {
            history.push("/home");
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: result.message,
          imageUrl: "/images/alertas/error.png",
          showConfirmButton: false,
          width: "22rem",
          timer: 2500,
          background: "#E6E6FA",
        });
      }
    }
  }

  return (
    <div style={{  
      backgroundImage: "url(../../images/menu/login.jpeg)",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <Container>
        <Grid container>
          <Grid
            style={{
              textAlign: "center",
              minHeight: "100vh",
            }}
            className="card"
            item
            // xl={6}
            // sm={6}
            // xs={12}
            // md={6}
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Card style={{ backgroundColor: "#F9F9F9" }}>
              <h1>Registrar</h1>
              <form>
                <Container>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12} sm={12}>
                      <TextField
                        name="Nombre"
                        variant="outlined"
                        required
                        fullWidth
                        value={name}
                        FormHelperTextProps={helperTextProps}
                        helperText={errorMessageNombre}
                        label="Nombre Completo"
                        autoFocus
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} md={12} sm={12}>
                      <TextField
                        name="Email"
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        helperText={errorMessage}
                        FormHelperTextProps={helperTextProps}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} md={12} sm={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        value={password}
                        label="Contraseña"
                        type="password"
                        id="password"
                        FormHelperTextProps={helperTextProps}
                        helperText={errorMessagePass}
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ margin: 15, borderRadius: 20 }}
                    onClick={signup}
                    disabled={statusdisable}
                    startIcon={<SaveIcon />}
                  >
                    Guardar
                  </Button>
                  <Button
                    onClick={goLogin}
                    variant="outlined"
                    color="secondary"
                    style={{ margin: 15, borderRadius: 20 }}
                  >
                    Cancelar
                  </Button>
                </Container>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Registro;
