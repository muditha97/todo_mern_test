import React, {useState, useEffect} from 'react';
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { createTask, updateTask } from "../../actions/todos";


const Form = ({currentId, setCurrentId}) => {
  const classes = useStyles();
  const todo = useSelector((state) => currentId ? state.todos.find((p) => p._id == currentId) : null);
    const [postData, setPostData] = useState({
        title: '',
        message: '',
    });
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (todo) setPostData(todo);
  }, [todo])
  

    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (currentId) {
        dispatch(updateTask(currentId, postData));
      }
      else {
        dispatch(createTask(postData));
      }
      clear();
    }

    const clear = () => {
      setCurrentId(null);
      setPostData({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: "",
      });

    }

    return (
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">{ currentId ? 'Editing' : 'Creating' } a Task</Typography>

          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />

          <TextField
            name="message"
            variant="outlined"
            label="Message"
            fullWidth
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />

          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>

          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth        
          >
            Clear
          </Button>
        </form>
      </Paper>
    );
}

export default Form