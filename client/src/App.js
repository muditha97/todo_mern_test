import React, {useState, useEffect} from "react";
import { Container, AppBar, Typography, Grid, Grow } from "@material-ui/core";
import Form from "./components/Form/Form.js";
import Todos from "./components/Todos/Todos.js";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { getTodos } from './actions/todos';

import imageMain from "./images/memories.png";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [currentId, dispatch])
  


  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Todo List
        </Typography>
        <img
          className={classes.image}
          src={imageMain}
          alt="imageMain"
          height={"60"}
        />
      </AppBar>
      <Grow in>
        <Container>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Grid item xs={12} sm={7}>
              <Todos setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </div>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
