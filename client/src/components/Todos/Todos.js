import React from 'react';
import Todo from './Todo/Todo';
import useStyles from "./styles";
import { useSelector } from 'react-redux';
import { Grid, Typography } from "@material-ui/core";

const Todos = ({ setCurrentId }) => {
  const classes = useStyles();
  const todos = useSelector((state) => state.todos);

  console.log(todos);
  return !todos.length ? (
    <Typography variant="h2" align="center">
      No Tasks Available. Please Create!!!
    </Typography>
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {todos.map((todo) => (
        <Grid key={todo.id} item xs={12} sm={6}>
          <Todo todo={todo} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Todos