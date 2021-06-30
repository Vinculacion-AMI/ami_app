import React, { useEffect, useState} from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";
import { useGridStyles } from "./style";
import { useStyles } from "./style";
import { Button } from "@material-ui/core";
import dataJson from "./data.js";
// import useForceUpdate from "use-force-update";
// import TransitionsSnackbar from "../dialogNotifications/notification";
import getDataUser from "../../util/get";
import postDataUser from "../../util/post";
import  nofound  from "../../assets/nofound.png";
import AppNavBar from '../../components/navbar'
import Swal from 'sweetalert2';

const dotenv = require("dotenv");
dotenv.config();


let colors = [
  "#FFC300",
  "#2ECC71",
  "#BEE37B",
  "#FF5733",
  "#884EA0",
  "#3498DB",
  "#2980B9",
];
const nameLvls = ['Monosílabas', 'Bisílabas', "Trisílabas"]
export const Syllables = React.memo(function SolidGameCard() {
  const [data, setData] = useState(false),
  [dataId, setDataId] = useState(false),
    [level, setLevel] = useState(false),
    [subLevel, setSubLevel] = useState(false),
    [stage, setStage] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    getData();

    // setLevel("nivel2");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!data, !level, !stage, !subLevel]);
  // const forceUpdate = useForceUpdate();
  const gridStyles = useGridStyles();
  const styles = useStyles({ color: colors[Math.floor(Math.random() * colors.length)] });

  const getData = async () => {
    const user = localStorage.getItem("user_id");
    const url = process.env.REACT_APP_BACKEND +"/stage/"+user+"/silabas";
    await getDataUser(url).then((response) => {
      const currentSubLvl = response[0].sub_level;
      const currentLvl = response[0].level;
      
      setDataId(response[0]._id)
      setSubLevel(currentSubLvl);
      setStage('silabas')
      setLevel(currentLvl);
      getContentLvlData(currentSubLvl, currentLvl);
    })

  };
  const getContentLvlData = (lvl, stageCate) => {
    
    setData(dataJson[stageCate][lvl]);
  
  };
  const nextLevel = async(value) => {
    if (value === level) {
      let arr = Object.keys(dataJson[level])
      let lastItem =   Object.keys(dataJson[level]).length-1
      const nxt = subLevel===arr[lastItem]?1:parseInt(subLevel.split("nivel")[1]) + 1;
      const nxtStage = level===nameLvls[nameLvls.length-1]?level:nameLvls[nameLvls.indexOf(level)+1]
      const dataNxtLvl = JSON.stringify({
        _id: dataId,
        level: nxt===1?nxtStage:level,
        sub_level: subLevel===arr[lastItem]&&level===nameLvls[nameLvls.length-1]?subLevel:`nivel${nxt}`
      })
      if(subLevel===arr[lastItem]&&level===nameLvls[nameLvls.length-1]){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Fin del juego',
          text: ' Fecilicades has gando este nivel',
          showConfirmButton: false,
          width: '22rem',
          timer: 1500
        });        
      }else{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Felicitaciones',
          text: ' Respuesta correcta',
          showConfirmButton: false,
          width: '22rem',
          timer: 1500
        })
      }
      
      const url ="http://localhost:4000/stage";
      
 
      setTimeout(() => {
        setData(false);
         postDataUser(url,dataNxtLvl).then(response =>{
          if(response){
            getData()
          }
          if(subLevel===arr[lastItem]&&level===nameLvls[nameLvls.length-1]){          }
        })
      }, 1000);
    }else{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Vuelve Intentar',
        text: ' Respuesta Incorrecta',
        showConfirmButton: false,
        width: '22rem',
        timer: 1500
      });
    }

  };
  const previousLevel = async() => {
    const url =
    "http://localhost:4000/stage";
    setData(false);
    let arr = Object.keys(dataJson[level])
    let lastItem =   Object.keys(dataJson[level]).length-1
    console.log(lastItem)
    const nxt = subLevel===arr[0]?lastItem+1:parseInt(subLevel.split("nivel")[1]) - 1;
    const nxtStage = level===nameLvls[0]?level:nameLvls[nameLvls.indexOf(level)-1]
    const dataNxtLvl = JSON.stringify({
      _id: dataId,
      level: subLevel===arr[0]?nxtStage:level,
      sub_level: `nivel${nxt}`
    })
    await postDataUser(url,dataNxtLvl).then(response =>{
      if(response){
        getData()
      }
    })
    
  };

  const CustomCard = ({ classes, image, title, content }) => {
    const mediaStyles = useFourThreeCardMediaStyles();
    if (!data || data === undefined) {
      return <Typography>Cargando...</Typography>;
    } else {
      return (
        <div>
          <CardActionArea className={classes.actionArea}>
          <Card
            className={data.length < 3 ? classes.card : classes.cardMinSize}  onClick={()=>nextLevel(content)}
          >
            <CardMedia classes={mediaStyles} image={image} />
            <CardContent className={classes.content}>
              <Typography className={classes.titleCard} variant={"h3"}>
                {title}
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
        </div>
        
      );
    }
  };
  if (!data) {
    return <Typography>Cargando...</Typography>;
  } else {
    return (
      <div  style={{ backgroundColor:"#6495ED", height:"100vh", textAlign: "center", }}>

      <>
        <AppNavBar/> 
        <br></br>
        <Typography className={classes.titleWord}>{`Selecciona la opción correspondiente a ${level}`}</Typography>
        <br></br>
        <Grid classes={gridStyles} container spacing={4}>
          {data.map((content) => {
            return (
              <Grid item>
                <CustomCard
                  classes={styles}
                  content={content.category}
                  title={content.title}
                  image={
                    !content.img||content.img===undefined?nofound:content.img
                  }
                 
                />
              </Grid>
            );
          })}
        </Grid>
        <Grid container justify="center">
          <Grid item>
            <Button
              onClick={()=>{window.location.replace("http://localhost:3000")}}
              variant="contained"
              size="large"
              className={classes.buttonCheck}
            >
              Inicio
            </Button>
          </Grid>
          <Grid item>
            <Button
              disabled={subLevel === "nivel1" && level==='Monosílabas'}
              onClick={previousLevel}
              variant="contained"
              size="large"
              className={classes.buttonCheck}
            >
              Anterior
            </Button>
          </Grid>
        </Grid>
        <div className={classes.root}>
            </div>
      </>
      </div>
    );
  }
  
});
export default Syllables;