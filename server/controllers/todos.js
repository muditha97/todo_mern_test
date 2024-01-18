import mongoose from "mongoose";
import ToDos from "../models/todo.js";

export const getTodos = async (req, res) => {
  try {
    const todoList = await ToDos.find();

    res.status(200).json(todoList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const todo = req.body;
  const newTodo = new ToDos(todo);

  try {
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const todo = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No task with this ID");

    const updatedTodo = await ToDos.findByIdAndUpdate(
      _id,
      { ...todo, _id },
      { new: true }
    );

    res.json(updatedTodo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No task with this ID");

    await ToDos.findByIdAndRemove(id);

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

export const completeTask = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No task with this ID");

    const updatedTodo = await ToDos.findByIdAndUpdate(
      id,
      { completed: 1 },
      { new: true }
      );
      
      console.log(updatedTodo);

    res.json(updatedTodo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};