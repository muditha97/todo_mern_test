import * as api from '../api';

//Action Creators
export const getTodos = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createTask = (todo) => async(dispatch) => {
    try {
        const { data } = await api.createTask(todo);

        dispatch({ type: "CREATE", payload: data });
        
    } catch (error) {
        console.log(error.message);
    }
}

export const updateTask = (id, todo) => async(dispatch) => {
    try {
        const { data } = await api.updateTask(id, todo);
        console.log('Data: ', data);
        
         dispatch({ type: "UPDATE", payload: data });
    } catch (error) {
        console.log('Action: ',error.message);
    }
}

export const deleteTask = (id) => async (dispatch) => {
    try {
        await api.deleteTask(id);

        dispatch({type:'DELETE', payload:id});
    } catch (error) {
        console.log(error);
    }
}

export const completeTask = (id) => async (dispatch) => {
  try {
    const { data } = await api.completeTask(id);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log("Action: ", error);
  }
};