import React, { } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles ((theme) => ({
  root: {
    minWidth: 275,
    width: "100%",
    maxWidth: 260,
    height: 'auto',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
    margin: 'center',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },

  card2: {
    minWidth: 275,
    width: "80%",
    maxWidth: 400,
    height: 'auto',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 25,
    margin: 10,
    paddingBottom: 5,
    background: "#80CE63 ",
  },

  media: {
    margin: 10,
    height: 0,
    paddingTop: '56.25%',
    borderRadius: 25
  },

  title: {
    fontSize: 40,
  },
  pos: {
    fontSize: 15,
    marginBottom: 10,
  },
  button: {
    fontSize: 25
  },
  button2: {
    borderRadius: 33,
    height: 48,
    padding: 5,
    width: 500
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#000',
    background: '#FADDA3 ',
   
    
  },
  linea: {
    width: '80%',
    '& > * + *': {
      marginTop: theme.spacing(2)
        },
    
    margin: 'auto'
    }
}));

export default function Puntajes() {
  const classes = useStyles();

  return (
    <Card className={classes.card2}>
        <CardMedia className={classes.media} image="../../images/slide_puntajes.jpg"  title="Paella dish"/>
        
        <Card className={classes.root} variant="outlined">
            <CardContent className={classes.bull} >
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                Nivel 002
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                PUNTUACIÓN DE 
                </Typography>
                
                <Chip  className={classes.button}
                    avatar={<Avatar alt="Natacha" src="../../images/slide_2.jpg" />}
                    label="10000"
                />
            </CardContent>
            <div className={classes.button2}>
                <Grid container spacing={3}>
                    <Grid item xs={3} >
                        <Button  className={classes.paper}  size="medium" >REPETIR</Button>
                    </Grid>
                    <Grid item xs={3} >
                        <Button  className={classes.paper}  size="medium" >SIGUIENTE</Button>
                    </Grid>
                </Grid>
            </div>

            
        </Card>
        <br/>


        <div className={classes.linea}>
                <LinearProgress />
                <LinearProgress color="secondary" />
            </div>
    </Card>

  );
    
}