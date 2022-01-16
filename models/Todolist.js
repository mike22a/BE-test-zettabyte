import mongoose from "mongoose";

const TodolistSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    done:{
        type: Boolean,
        required: true
    }
});

// export default mongoose.model('Todolist', Todolist);

export const Todolist = mongoose.model('Todolist', TodolistSchema);