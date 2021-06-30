import React, {  useEffect} from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import { useHistory } from "react-router";
import {useStyles} from "./style";
import {   CardActionArea,  Grid } from "@material-ui/core";
import Swal from 'sweetalert2';
import AppNavBar from '../../components/navbar';
import '../../css/game1.css';


function Game1() {
    const classes = useStyles();

    const [dato1, setDato1] = React.useState({});
    const [contador, setContador] = React.useState(0);
    let history = useHistory();

    let img = [
      { id: 1, name: "Perro", photo: "../../../images/gameDnD/perro.jpg" },
      { id: 2, name: "Gato", photo: "../../../images/gameDnD/gati1.jpg" },
      { id: 3, name: "Conejo", photo: "../../../images/gameDnD/cone1.jpg" },
      { id: 4, name: "Gallina", photo: "../../../images/gameDnD/gal1.jpg" },
      { id: 5, name: "Caballo", photo: "../../../images/gameDnD/cab1.jpg" },
      { id: 6, name: "Perro", photo: "../../../images/gameDnD/perr1.jpg" },
      { id: 7, name: "Gato", photo: "../../../images/gameDnD/gati2.jpg" },
      { id: 8, name: "Conejo", photo: "../../../images/gameDnD/cone2.jpg" },
      { id: 9, name: "Gallina", photo: "../../../images/gameDnD/gal2.jpg" },
      { id: 10, name: "Caballo", photo: "../../../images/gameDnD/cab2.jpg" },
    ];

    function generateRandomInt() {
      return Math.floor(Math.random() * (10 - 0) + 0);
    }
    let numeros = Number(generateRandomInt());

    let prueba = img[numeros];

    let data = [
      { id: 1, name: "Perro" },
      { id: 2, name: "Conejo" },
      { id: 3, name: "Gato" },
      { id: 4, name: "Gallina" },
      { id: 5, name: "Caballo" },
    ];

  const botones = () => {
    var data2 = [];
    let aleatorio = data.map((item) => {
      let random = data[Math.floor(Math.random() * data.length/5)];
        if (!data2.includes(random)) {
          data2.push(random);
        }
      return data2;
    });
    console.log(aleatorio);
    data2.push(dato1);
    if(data2[1].name == "Perro"){
      data2.push(data[1]);
    }
    var datos = [];
    for (let i = 0; i < data2.length; i++) {
      datos.push(data2[i].name);
    }
    let sinRepeticion = [...new Set(datos)]; //Me quita los datos repetidos
    var quitadoUndfine = [];
    for (let i = 0; i < sinRepeticion.length; i++) {
      if (sinRepeticion[i] !== undefined) {
        quitadoUndfine.push(sinRepeticion[i]);
      }
    }

    var objetoAnimales = quitadoUndfine.map(function (elemento) {
      var dividir = elemento.split(" ");
      return { name: dividir[0] };
    });
    return objetoAnimales;
  };

  let btnR = botones();

  //let random = img[Math.floor(Math.random() * img.length)]
  
    useEffect(() => {
      setDato1(prueba);

      return () => {
        setDato1({})

      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = async (dato) => {
      if(dato === dato1.name)
      {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Felicitaciones',
          text: ' Respuesta correcta',
          showConfirmButton: false,
          width: '22rem',
          timer: 1500
        })
        prueba = img[numeros];
        setDato1(prueba)
        btnR = botones()
        setContador(contador+1);
        if(contador === 5) 
        {
          setContador(0);
          
          let token = localStorage.getItem("token")
          let user = localStorage.getItem("user_id")
          let data = {
            persons: user,
            nivel: 2,
            Ptotal: 5
          }
          let result = await fetch(process.env.REACT_APP_BACKEND+"/score", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type" : 'application/json',
              "Accept" : 'application/json',
              "authorization" : token
            }
          })
          console.log(result);
          if(result.status === 200){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Fin del juego',
              text: ' Felicidades has ganado este nivel',
              showConfirmButton: false,
              width: '22rem',
              timer: 1500
            });
            history.push("/levels");
          }else{
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Algo paso con el servidor',
              text: 'comuniquese con el administrador',
              showConfirmButton: false,
              width: '22rem',
              timer: 1500
            });
            history.push("/levels");
          }
        }
      }else {
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

  return (
    <div style={{ backgroundColor: "#6495ED", height: 759 }}>
      <AppNavBar />
      <div>
        <Grid container>
          <Grid xs={12} lg={12} sm={12}>
            <Grid className="perro">
              <h2>Reconoce el animalito</h2>

              <Card className={classes.root}>
                <CardMedia className={classes.media} image={dato1.photo} />
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid className="opciones">
          <Grid container>
            <Grid sm={2}></Grid>
            <Grid xs={8} md={6}>
              <Grid container>
                {Object.values(btnR).map((item) => (
                  <Grid xs={12} sm={6}>
                    <Grid className="cards">
                      <CardActionArea
                        style={{ borderRadius: 50 }}
                        onClick={() => handleChange(item.name)}
                      >
                        <Card style={{ borderRadius: 50 }}>
                          <Card
                            style={{
                              borderRadius: 50,
                              background:
                                "linear-gradient(to right bottom,  #825191, #ff93c2)",
                            }}
                          >
                            <h2 style={{ color: "#fff" }}>{item.name}</h2>
                          </Card>
                        </Card>
                      </CardActionArea>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Game1;