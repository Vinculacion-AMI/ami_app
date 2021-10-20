import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import AppNavBar from "../../components/navbar";
import { Grid, Card, Container } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    borderRadius: 30,
  },
  media: {
    height: 250,
  },
});

export default function Home() {
  const classes = useStyles();
  let history = useHistory();
  //Redirect to windows levels/games
  const levels = () => {
    history.push("/levels");
  };
  const admin = localStorage.getItem("isadmin") === "true" ? true : false;
  return (
    <div style={{ backgroundColor: "#6495ED" }}>
      <AppNavBar isAdmin={admin} />
      <Grid
        style={{
          textAlign: "center",
          height: "100vh",
        }}
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        //item
        container
      >
        <Container>
          <Grid spacing={2} container>
            <Grid align="center" item xs={12} md={12} sm={12}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="../../images/menu/inicio.jpeg"
                    title="Niveles"
                    onClick={levels}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Niveles
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Aprende y divierte con los diferentes niveles.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}
