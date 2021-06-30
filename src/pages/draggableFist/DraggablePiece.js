import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./style";
import useForceUpdate from "use-force-update";
import { Button } from "@material-ui/core";
import Zoom from "@material-ui/core/Zoom";
//Function
import getDataUser from "../../util/get";

export default function DraggablePiece(props) {
  const [textContent, setTextContent] = useState(Array),
    [stateArrayItems, setStateArrayItems] = useState(Array),
    [puzzleSolve, setPuzzleSolve] = useState(Array);
  const classes = useStyles();
  const wordsxx = ["AEIOU", "DA", "DE"];
  useEffect(() => {
    begingComponents();
    forceUpdate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getData = async () => {
    const user = localStorage.getItem("user_id");
    const url = process.env.REACT_APP_BACKEND + "/stage/" + user + "/vocablo";
    await getDataUser(url).then((response) => {
      // const currentSubLvl = response[0].sub_level;
      // const currentLvl = response[0].level;
    });
  };
  const forceUpdate = useForceUpdate();
  const shuffle = (array) => {
    const mix = array.sort(() => Math.random() - 0.5);
    return mix;
  };
  const begingComponents = () => {
    const word = props.arrayWord;
    setTextContent(shuffle(word));

    setStateArrayItems(new Array(props.arrayWord.length));
    setPuzzleSolve(new Array(props.arrayWord.length));
  };
  const fixWord = (a, b) => {
    if (a && b && a !== undefined && b !== undefined && b[0] !== undefined) {
      let worldtest = "";
      let option1 = [];
      let option2 = [];
      a.forEach((element) => {
        option1.push(element[0]);
      });

      b.forEach((element) => {
        if (element !== undefined || element) {
          option2.push(element[0]);
          worldtest += element[0];
        }
      });
      getData();
      var found = wordsxx.includes(worldtest.toString());

      if (found) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const finalSolve = () => {
    let solv = textContent.sort((a, b) => {
      let firstLetter = a.split(a[0]);
      let secondLetter = b.split(b[0]);
      return firstLetter[1] - secondLetter[1];
    });
    fixWord(solv, puzzleSolve)
      ? props.switchAnswer("correct")
      : props.switchAnswer("wrong");
  };
  const previousLevel = () => {
    props.previousLevel();
  };
  const setText = (item, state) => {
    let arrayUpdated = stateArrayItems;
    if (state) {
      for (let index = 0; index < arrayUpdated.length; index++) {
        let arrayPuzzleSolve = puzzleSolve;
        if (arrayPuzzleSolve[index] === undefined) {
          arrayPuzzleSolve[index] = item;
          setPuzzleSolve(arrayPuzzleSolve);
          break;
        }
      }
    } else {
      let arrayPuzzleDisolve = puzzleSolve;
      for (let index = 0; index < arrayPuzzleDisolve.length; index++) {
        let arrayPuzzleDisolve = puzzleSolve;
        if (arrayPuzzleDisolve[index] === item) {
          arrayPuzzleDisolve[index] = undefined;
          setPuzzleSolve(arrayPuzzleDisolve);

          break;
        }
      }
    }
    setStateArrayItems(arrayUpdated);
    forceUpdate();
  };

  if (textContent && stateArrayItems) {
    let ikey = 0;
    return (
      <div style={{ backgroundColor: "#6495ED", height: "100vh" }}>
        <Grid container className={classes.rootGrid}>
          <Grid item xs={12}>
            <Grid container justify="center">
              {puzzleSolve.map((content) => {
                ikey += 1;
                return (
                  <Grid style={{ backgroundColor: "#6495ED" }} key={ikey} item>
                    <Zoom in={content !== undefined}>
                      <Card className={classes.rootEmptyCard}>
                        {content === undefined ? null : (
                          <CardContent onClick={() => setText(content, false)}>
                            <Typography className={classes.title}>
                              {content === undefined
                                ? null
                                : Array.from(content)[0]}
                            </Typography>
                          </CardContent>
                        )}
                      </Card>
                    </Zoom>
                  </Grid>
                );
              })}
            </Grid>
            <Grid container justify="center">
              {textContent.map((content) => {
                ikey += 10;
                let i = textContent.indexOf(content);
                return (
                  <Grid key={ikey} item>
                    <Zoom in={stateArrayItems[i] === undefined}>
                      <Card className={classes.rootEmptyCard}>
                        {stateArrayItems[i] !== undefined ? null : (
                          <CardContent onClick={() => setText(content, true)}>
                            <Typography className={classes.title}>
                              {stateArrayItems[i] !== undefined
                                ? null
                                : Array.from(content)[0]}
                            </Typography>
                          </CardContent>
                        )}
                      </Card>
                    </Zoom>
                  </Grid>
                );
              })}
            </Grid>
            <Grid container justify="center">
              <Grid item>
                <Button
                  disabled={!puzzleSolve[0]}
                  onClick={finalSolve}
                  variant="contained"
                  size="large"
                  color="primary"
                >
                  Siguiente
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={previousLevel}
                  variant="contained"
                  size="large"
                  color="primary"
                >
                  Anterior
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return (
      <div>
        <Typography>Loading...</Typography>
      </div>
    );
  }
}
