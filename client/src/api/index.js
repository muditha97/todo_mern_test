import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createTask = (newPost) => axios.post(url, newPost);
export const updateTask = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deleteTask = (id) => axios.delete(`${url}/${id}`);
export const completeTask = (id) => axios.patch(`${url}/${id}`);
