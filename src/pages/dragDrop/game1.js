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
      { id: 4, name: "Oveja", photo: "../../../images/gameDnD/oveja.jpg" },
      { id: 5, name: "Caballo", photo: "../../../images/gameDnD/cab1.jpg" },
      { id: 6, name: "Tortuga", photo: "../../../images/gameDnD/tortuga.png" },
      { id: 7, name: "León", photo: "../../../images/gameDnD/leon.png" },
      { id: 8, name: "Pingüino", photo: "../../../images/gameDnD/pinguino.png"},
      { id: 9, name: "Jirafa", photo: "../../../images/gameDnD/jirafa.png" },
      { id: 10, name: "Hipopótamo", photo: "../../../images/gameDnD/hipopotamo.jpg" },
      { id: 11, name: "Ardilla", photo: "../../../images/gameDnD/ardilla.jpg" },
      { id: 12, name: "Burro", photo: "../../../images/gameDnD/burro.jpg" },
      { id: 13, name: "Loro", photo: "../../../images/gameDnD/loro.jpg" },
      { id: 14, name: "Tucán", photo: "../../../images/gameDnD/tucan.jpg" },
      { id: 15, name: "Venado", photo: "../../../images/gameDnD/venado.jpg" },
      { id: 16, name: "Canario", photo: "../../../images/gameDnD/canario.jpg" },
      { id: 17, name: "Camarón", photo: "../../../images/gameDnD/camaron.jpg" },
      { id: 18, name: "Tiburón", photo: "../../../images/gameDnD/tiburon.jpg" },
      { id: 19, name: "Medusa", photo: "../../../images/gameDnD/medusa.png" },
      { id: 20, name: "Mariposa", photo: "../../../images/gameDnD/mariposa.png" },  
      { id: 21, name: "Abeja", photo: "../../../images/gameDnD/abeja.jpg" },
      { id: 22, name: "Colibri", photo: "../../../images/gameDnD/colibri.jpg" },  
      { id: 23, name: "Ballena", photo: "../../../images/gameDnD/ball.jpg" },  
      { id: 24, name: "Iguana", photo: "../../../images/gameDnD/ig.jpg" },  
      { id: 25, name: "Elefante", photo: "../../../images/gameDnD/elf.jpg" },  
      { id: 26,name: "Águila", photo: "../../../images/gameDnD/aguila1.png" },  
      { id: 27,name: "Bizonte", photo: "../../../images/gameDnD/bizonte1.png" },
      { id: 28,name: "Búfalo", photo: "../../../images/gameDnD/bufalo1.png" },
      { id: 29,name: "Búho", photo: "../../../images/gameDnD/buho1.png" },
      { id: 30,name: "Cerdo", photo: "../../../images/gameDnD/cerdo1.png" },
      { id: 31,name: "Cocodrilo", photo: "../../../images/gameDnD/cocodrilo1.png" },
      { id: 32,name: "Conejo", photo: "../../../images/gameDnD/conejo1.png" },
      { id: 33,name: "Delfín", photo: "../../../images/gameDnD/delfin1.png" },
      { id: 34,name: "Foca", photo: "../../../images/gameDnD/foca1.png" },
      { id: 35,name: "Gallina", photo: "../../../images/gameDnD/gal1.png" },
      { id: 36,name: "Jaguar", photo: "../../../images/gameDnD/jaguar.png" },
      { id: 37,name: "Lobo", photo: "../../../images/gameDnD/lobo1.png" },
      { id: 38,name: "Mono", photo: "../../../images/gameDnD/mono1.png" },
      { id: 39,name: "Ñu", photo: "../../../images/gameDnD/ñu1.png" },
      { id: 40,name: "Orca", photo: "../../../images/gameDnD/orca1.png" },
      { id: 41,name: "Oso", photo: "../../../images/gameDnD/oso1.png" },
      { id: 42,name: "Pantera", photo: "../../../images/gameDnD/pantera1.png" },
      { id: 43,name: "Pato", photo: "../../../images/gameDnD/pato1.png" },
      { id: 44,name: "Pescad", photo: "../../../images/gameDnD/pescado1.png" },
      { id: 45,name: "Ratón", photo: "../../../images/gameDnD/raton1.png" },
      { id: 46,name: "Serpiente", photo: "../../../images/gameDnD/serpiente.png" },
      { id: 47,name: "Tigre", photo: "../../../images/gameDnD/tigre1.png" },
      { id: 48 ,name: "Vaca", photo: "../../../images/gameDnD/vaca1.png" },
      { id: 49,name: "Cebra", photo: "../../../images/gameDnD/zebra1.png" },
      { id: 50,name: "Zorro", photo: "../../../images/gameDnD/zorro1.png" },
    ];

    function generateRandomInt() {
      return Math.floor(Math.random() * (50 - 0) + 0);
    }
    let numeros = Number(generateRandomInt());

    let prueba = img[numeros];

    let data = [
      { id: 1, name: "Perro" },
      { id: 2, name: "Conejo" },
      { id: 3, name: "Gato" },
      { id: 4, name: "Gallina" },
      { id: 5, name: "Caballo" },
      { id: 6, name: "Tortuga" },
      { id: 7, name: "León" },
      { id: 8, name: "Pingüino" },
      { id: 9, name: "Jirafa" },
      { id: 10, name: "Hipopótamo" },
      { id: 11, name: "Ardilla" },
      { id: 12, name: "Burro" },
      { id: 13, name: "Loro" },
      { id: 14, name: "Tucán" },
      { id: 15, name: "Venado" },
      {id:16, name: "Canario" },
      {id:17, name: "Camarón" },
      {id:18, name: "Tiburón" },
      {id:19, name: "Medusa" },
      {id:20, name: "Mariposa" },
      {id:21, name: "Abeja" },
      {id:22, name: "Colibri" },
      {id:23, name: "Ballena" },
      {id:24, name: "Iguana" },
      {id:25, name: "Elefante" },
      {id:26, name: "Águila" },
      {id:27, name: "Bizonte" },
      {id:28, name: "Búfalo" },
      {id:29, name: "Búho" },
      {id:30, name: "Cerdo" },
      {id:31, name: "Cocodrilo" },
      {id:32, name: "Conejo" },
      {id:33, name: "Delfín" },
      {id:34, name: "Foca" },
      {id:35, name: "Gallina" },
      {id:36, name: "Jaguar" },
      {id:37, name: "Lobo" },
      {id:38, name: "Mono" },
      {id:39, name: "Ñu" },
      {id:40, name: "Orca" },
      {id:41, name: "Oso" },
      {id:42, name: "Pantera" },
      {id:43, name: "Pato" },
      {id:44, name: "Pescado" },
      {id:45, name: "Ratón" },
      {id:46, name: "Serpiente" },
      {id:47, name: "Tigre" },
      {id:48, name: "Vaca" },
      {id:49, name: "Cebra" },
      {id:50, name: "Zorro" }

    ];

  const botones = () => {
    var data2 = [];
    let aleatorio = data.map((item) => {
      let random = data[Math.floor(Math.random() * data.length/50)];
        if (!data2.includes(random)) {
          data2.push(random);
        }
      return data2;
    });
    console.log(aleatorio);
    data2.push(dato1);
    if(data2[1].name === "Perro"){
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
        if(contador === 20) 
        {
          setContador(0);
          
          let token = localStorage.getItem("token")
          let user = localStorage.getItem("user_id")
          let data = {
            persons: user,
            nivel: 2,
            Ptotal: 50
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