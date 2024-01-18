import React from 'react';
import useStyles from "./styles";
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch } from 'react-redux';
import { deleteTask, completeTask } from "../../../actions/todos";

const Todo = ({ todo, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "green" }}
          size="small"
          onClick={() => setCurrentId(todo._id)}
        >
          <EditIcon fontSize="small" />
          Edit
        </Button>
      </div>
      <div className={classes.details}></div>
      <Typography className={classes.title} variant="h6" gutterBottom>
        {todo.title}
      </Typography>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {todo.message}
        </Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        {todo.completed == false ? (
          <Button size="small" color="primary" onClick={() => { dispatch(completeTask(todo._id)); }}>
            <ThumbDownAltIcon fontSize="small" />
            Complete
          </Button>
        ) : (
          <Button size="small" color="primary" disabled>
            <ThumbUpAltIcon fontSize="small" />
            Completed
          </Button>
        )}
        <Button
          size="small"
          style={{ color: "red" }}
          onClick={() => {
            dispatch(deleteTask(todo._id));
          }}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Todo