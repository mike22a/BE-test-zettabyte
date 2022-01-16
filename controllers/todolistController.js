// import models
import {Todolist} from "../models/Todolist.js";

// Get All Todolist
export const getTodolist = async (req,res) => {
    try{
        const article = await Todolist.find();
        res.json(article);
    }catch (error){
        res.status(500).json({message: error.message});
    }
}

// Get Single Todolist
export const getTodolistById = async (req,res) => {
    try{
        const article = await Todolist.findById(req.params.id);
        res.json(article);
    }catch (error){
        res.status(404),json({message: error.message});
    }
}

// Create Todolist
export const saveTodolist = async (req, res) => {
    const article = new Todolist(req.body);
    try{
        const savedTodolist = await article.save();
        res.status(201).json(savedTodolist);
    }catch (error) {
        res.status(400).json({message: error.message});
    }
}

// Update Todolist
export const updateTodolist = async (req,res) => {
    const cekId = await Todolist.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: error.message});
    try{
        const updatedTodolist = await Todolist.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedTodolist);
    }catch (error){
        req.status(400).json({message: error.message});
    }
}
// Update Todolist2
export const updateTodolist2 = async (req,res) => {
    const cekId = await Todolist.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: error.message});
    try{
        const updatedTodolist = await Todolist.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedTodolist);
    }catch (error){
        req.status(400).json({message: error.message});
    }
}

// Delete Todolist
export const deleteTodolist = async (req,res) => {
    const cekId = await Todolist.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: error.message});
    try{
        const deletedTodolist = await Todolist.deleteOne({_id : req.params.id});
        res.status(200).json(deletedTodolist);
    }catch{
        res.status(400).json({message: error.message});
    }
}
