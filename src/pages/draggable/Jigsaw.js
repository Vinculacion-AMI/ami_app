import React, { useState, useRef, useEffect } from "react";
import DraggablePiece from "./DraggablePiece";
import { useStyles } from "./style";
import TransitionsSnackbar from "../dialogNotifications/notification";
import useForceUpdate from "use-force-update";
import { Typography } from "@material-ui/core";
import AppNavBar from '../../components/navbar'

const { List } = require("immutable");
const httpGetProvin = {
  currentLvl: "nivel1",
};
const words = ['AVIÓN','ÁRBOL','ABEJA',
  'BALÓN','BARCO','CASA','CONEJO',
  'DADO','DIENTE','CHOCOLATE','ESPEJO',
  'ESCALERA','FRESA','FUEGO','JOYA','JARRA',
  'GATO','GUANTE','KIWI','KARATE','ISLA','IGLU',
  'LLAVE','LLAMA','LÁPIZ','LIMÓN','OSO','OJO',
  'MANO','MAPA','PERA','PEZ','NAVE','NIÑO',
  'QUESO','QUÍMICA','RAMA','RANA','UÑA','UVA',
  'SANDIA','SILLA','VACA','VELA','TAZA','TIGRE',
  'YATE','YUNQUE'
];
const JigSaw = () => {
  const [word, setWord] = useState(false),
    [arrayWord, setArrayWord] = useState([]),
    [currentLevel, setCurrentLevel] = useState(false),
    [levels, setlevels] = useState([]),
    [changeLvl, setchangeLvl] = useState(false);

  useEffect(() => {
    getClevel();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const forceUpdate = useForceUpdate();
  const childRef = useRef();
  const getClevel = (value) => {
    setCurrentLevel(httpGetProvin.currentLvl);
    if (!currentLevel) {
      encodeLevels(httpGetProvin.currentLvl);
    } else {
      encodeLevels(value);
      setTimeout(() => {
        setchangeLvl(false);
      }, 800);
      forceUpdate();
    }
  };

  const encodeLevels = (item) => {
    let array = [];
    let i = 0;
    let lettersContainer = [];
    words.forEach((element) => {
      let i = words.indexOf(element) + 1;
      array.splice(i, 0, "nivel" + i);
    });
    let lvlWord = words[array.indexOf(item)];
    console.log(item);
    Array.from(lvlWord).forEach((element) => {
      lettersContainer.push(element + i);
      i += 1;
    });
    lettersContainer = List(lettersContainer)._tail.array;
    setArrayWord(lettersContainer);
    setWord(lvlWord);
    setlevels(array);
  };

  const classes = useStyles();
  const switchAction = (value) => {
    childRef.current.handleClick(value);
    if (value === "correct" && words[words.length - 1] !== word) {
      nextLevel();
    }
  };

  const nextLevel = () => {
    setTimeout(() => {
      setchangeLvl(true);
    }, 800);
    let i = levels.indexOf(currentLevel) + 2;
    let changeLvlvar = "nivel" + i;
    httpGetProvin.currentLvl = changeLvlvar;
    getClevel(changeLvlvar);
    forceUpdate();
  };

  const switchActionPrevLvl = () => {
    if (words[0] !== word) {
      previousLevel();
    }
  };

  const previousLevel = () => {
    setTimeout(() => {
      setchangeLvl(true);
    }, 800);
    setchangeLvl(true);
    let i = levels.indexOf(currentLevel);
    let changeLvlvar = "nivel" + i;
    httpGetProvin.currentLvl = changeLvlvar;
    console.log(changeLvlvar);
    getClevel(changeLvlvar);
    forceUpdate();
  };
  
  const DragabbleComponent = () => {
    if (arrayWord.length === 0 && !currentLevel) {
      <Typography>Loading...</Typography>;
    } else if (changeLvl) {
      return (
        <div className={classes.root}>
          <Typography className={classes.titleWord}>
            Cargando Nivel...
          </Typography>
          ;
        </div>
      );
    } else if (!changeLvl) {
      return (
        <>
          <div style={{ backgroundColor: "#6495ED", minheight: "100vh" }}>
            <AppNavBar />
            <div className={classes.root}>
              <form noValidate autoComplete="off">
                <Typography
                  variant="h3"
                  component="h3"
                  className={classes.titleWord}
                >
                  {`Forma la siguiente palabra "${word}"`}
                </Typography>
              </form>
            </div>

            <DraggablePiece
              arrayWord={arrayWord}
              switchAnswer={switchAction}
              previousLevel={switchActionPrevLvl}
            />
            {
              <div className={classes.root}>
                <TransitionsSnackbar ref={childRef} />
              </div>
            }
          </div>
        </>
      );
    }
  };
  return <>{DragabbleComponent()}</>;
}
export default React.forwardRef(JigSaw)