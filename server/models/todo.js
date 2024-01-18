import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    title: String,
    message: String,
    completed: {
        type: Number,
        default:0
    },
    createdAt: {
        type: Date,
        default:new Date()
    }
});

const ToDos = mongoose.model('ToDos', todoSchema);

export default ToDos;