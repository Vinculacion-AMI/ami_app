import React, {
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import Dialog from "@material-ui/core/Dialog";
import Grow from "@material-ui/core/Grow";
import ErrorIcon from "@material-ui/icons/Error";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import StarIcon from "@material-ui/icons/Star";
import { useStyles } from "./style";
import { Card } from "@material-ui/core";
import Box from "@material-ui/core/Box";
function GrowTransition(props) {
  return <Grow {...props} />;
}

const TransitionsSnackbar = forwardRef((props, ref) => {
  const [state, setState] = useState({
      open: false,
      type: false,
    }),
    [loading, setLoading] = useState(true);
  const classes = useStyles();
  useEffect(() => {
    setLoading(false);
  }, []);
  useImperativeHandle(ref, () => ({
    handleClick(element) {
      setState({
        open: true,
        type: element,
      });
    },
  }));
  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };
  if (loading) {
    return <Typography>Cargando...</Typography>;
  } else if (state.type === "correct") {
    return (
      <div className={classes.root}>
        <Dialog
          open={state.open}
          onClose={handleClose}
          TransitionComponent={GrowTransition}
          BackdropProps={{
            classes: {
              root: classes.rootDialog,
            },
          }}
          PaperProps={{
            classes: {
              root: classes.paper,
            },
          }}
        >
          <Card className={classes.root}>
            <CardContent>
              <Box className={classes.boxTitle} borderRadius={50}>
                <Typography className={classes.titleWord}>
                  Respuesta Correcta!!{" "}
                </Typography>
              </Box>
              <CheckCircleIcon className={classes.iconSuccess} />
            </CardContent>
          </Card>
        </Dialog>
      </div>
    );
  } else if (state.type === "wrong") {
    return (
      <div>
        <Dialog
          open={state.open}
          onClose={handleClose}
          TransitionComponent={GrowTransition}
          BackdropProps={{
            classes: {
              root: classes.rootDialog,
            },
          }}
          PaperProps={{
            classes: {
              root: classes.paper,
            },
          }}
        >
          <Card className={classes.root}>
            <CardContent>
              <Box className={classes.boxTitle} borderRadius={100}>
                <Typography className={classes.titleWord}>
                  Respuesta Incorrecta{" "}
                </Typography>
              </Box>

              <ErrorIcon className={classes.iconWrong} />
            </CardContent>
          </Card>
        </Dialog>
      </div>
    );
  } else if (state.type === "finish") {
    return (
      <div className={classes.root}>
        <Dialog
          open={state.open}
          onClose={handleClose}
          TransitionComponent={GrowTransition}
          BackdropProps={{
            classes: {
              root: classes.rootDialog,
            },
          }}
          PaperProps={{
            classes: {
              root: classes.paper,
            },
          }}
        >
          <Card className={classes.root}>
            <CardContent>
              <Box className={classes.boxTitle} borderRadius={100}>
                <Typography className={classes.titleWord}>
                  COMPLETASTE EL NIVEL
                </Typography>
              </Box>
              <StarIcon className={classes.iconFinish} />
            </CardContent>
          </Card>
        </Dialog>
      </div>
    );
  } else {
    return null;
  }
});
export default TransitionsSnackbar;
