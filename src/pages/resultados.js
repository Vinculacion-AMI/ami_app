import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { Table } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import AppNavBar from '../components/navbar'

// function charge( userId) {
//   const url = `http://localhost:4000/stage/6077083499b25a0c64418012/getscore/${userId}`;
//   this.init()
// }

function createData(levels, score, ) {
    return { levels, score};
  }
  
  const rows = [
    createData('Nivel 1', 1005),
    createData('Nivel 2', 2300),
    createData('Nivel 3', 2200),
    createData('Nivel 4', 3005),
    createData('Nivel 5', 3056),
  ];

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 18,
    fontWeight:' 3px',
    fontFamily: 'italic',
  },
  body: {
    padding: ' 6px',
    margin: 0,
    fontSize: 18,
    
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.disabledBackground
    },
  },
}))(TableRow, StyledTableCell);

const useStyles = makeStyles({
  root:{
    width: "100%",
    maxWidth: 975,
    height: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
    padding: 20
  },
  table: {
    minWidth: 90,
    padding: 0,
    textAlign: 'rigth'
    
  },
  media: {
    height: 140,
  },
  paper: {
    fontFamily: 'italic',
    fontSize: 30,
    fontWeight: 'bold',
    textShadow: '0 0 3px #FF0000, 0 0 5px #0000FF'
  },
  subcell:{
    fontFamily: 'italic',
    fontWeight: 'bold'
  },
  
});


export default function Resultados(props) {
  const classes = useStyles();
  return (
    <div>
      <AppNavBar/> 
      <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/images/puntuacion.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
          <Grid item xs={12}>
            <Paper className={classes.paper}>TABLA DE PUNTAJES</Paper>
          </Grid>
          </CardContent>
        </CardActionArea>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Nivel</StyledTableCell>
                <StyledTableCell align="center">Puntos</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.levels}>
                  <StyledTableCell align="center">{row.levels}</StyledTableCell>
                  <StyledTableCell align="center">{row.score}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      </div>
    </div>
    
  );
}