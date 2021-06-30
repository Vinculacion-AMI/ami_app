//Componentes React
import React from "react";
import { Grid, TextField, Button, Card, Container } from "@material-ui/core";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Swal from "sweetalert2";


//Componentes Juegos
import Game1 from "./pages/dragDrop/game1";
import Draw from "./pages/draw/Draw";
import Draw2 from "./pages/draw/Draw2";
import Draw3 from "./pages/draw/Draw3";
import Draw4 from "./pages/draw/Draw4";
import Draw5 from "./pages/draw/Draw5";
import JigSaw from "./pages/draggable/Jigsaw";
import JigSawInit from "./pages/draggableFist/JigsawInit";
import Syllables from "./pages/syllables/syllables";
import LearnSyllabes from "./pages/Learn/LearnSyllabes";

// Componentes de gestion/visualizacion
import Puntajes from "./pages/puntajes";
import Resultados from "./pages/resultados";
import Levels from "./pages/levels/Levels";
//import session from "./util/session";

//Componentes Iniciales
import Home from "./pages/home/home";
import Registro from "./pages/Registro";
import ResetPassoword from "./pages/ResetPassword";
//import Login from "./pages/Login";

//Componentes de estilos css
import "./App.css";
// import "./css/login.css";
import { green, indigo } from "@material-ui/core/colors";

const authenticate = {
  isLoggedIn: false,
  onAuthentication() {
    this.isLoggedIn = true;
  },
  getLogInStatus() {
    if (localStorage.getItem("token") != null) {
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  },
  isLoggedInTK() {
    return localStorage.getItem("token") != null;
  },
};

function SecuredRoute(props) {
  authenticate.getLogInStatus();
  return (
    <Route
      path={props.path}
      render={(data) =>
        authenticate.getLogInStatus() === true ? (
          <props.component {...data}></props.component>
        ) : (
          <Redirect to={{ pathname: "/" }}></Redirect>
        )
      }
    ></Route>
  );
}

function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  if (localStorage.getItem("token") != null) {
    return props.history.goBack();
  }

  const statusdisable =
  email.length === 0 ||
  password.length === 0 
    ? true
    : false;

  async function login() {
    if (email === "" || password === "") {
      alert("Registrate por favor");
    } else {
      let data = { email, password };
      let result = await fetch(process.env.REACT_APP_BACKEND + "/login", {
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
            localStorage.setItem("token", result.token);
            localStorage.setItem("user_id", result.id);
            localStorage.setItem("isadmin", result.isAdmin);
            authenticate.onAuthentication();
            props.history.push("/home");
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
              borderRadius: 80,
            }}
            className="card"
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Card style={{ backgroundColor: "#F9F9F9" }}>
              <h1>Bienvenidos</h1>
              <form noValidate>
                <Container>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12} sm={6}>
                      <TextField
                        value={email}
                        variant="outlined"
                        required
                        fullWidth
                        id="name"
                        label="Email"
                        autoFocus
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} md={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        value={password}
                        label="Contraseña"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                      />
                    </Grid>
                    <Grid item xs={6} md={12}></Grid>
                  </Grid>
                  <Grid style={{ margin: 15 }} item xs={12} md={12}>
                    <Button
                      onClick={login}
                      fullWidth
                      variant="outlined"
                      color="primary"
                      disabled={statusdisable}
                      style={{ borderRadius: 20 }}
                    >
                      Ingresar
                    </Button>
                  </Grid>
                </Container>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: indigo[300],
      },
      secondary: {
        // This is green.A700 as hex.
        main: green[900],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Route path="/" exact component={Login} />
          <SecuredRoute path="/signup" component={Registro} />
          <SecuredRoute path="/resetpassword" component={ResetPassoword} />
          <SecuredRoute path="/home" component={Home} />
          <SecuredRoute path="/levels" component={Levels} />
          <SecuredRoute path="/draw" component={Draw} />
          <SecuredRoute path="/draw2" component={Draw2} />
          <SecuredRoute path="/draw3" component={Draw3} />
          <SecuredRoute path="/draw4" component={Draw4} />
          <SecuredRoute path="/draw5" component={Draw5} />
          <SecuredRoute path="/game1" component={Game1} />
          <SecuredRoute path="/syllables" component={Syllables} />
          <SecuredRoute path="/puzzle" component={JigSaw} />
          <SecuredRoute path="/puzzleInit" component={JigSawInit} />
          <SecuredRoute path="/puntajes" component={Puntajes} />
          <SecuredRoute path="/resultados" component={Resultados} />
          <SecuredRoute path="/learnSyllabes" component={LearnSyllabes} />
        </div>
      </Router>
    </ThemeProvider>
  );
}
export default App;
