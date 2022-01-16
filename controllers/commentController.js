// import models
import {Article, Comment} from "../models/Article.js";
// import Comment from "../models/Comment.js";

// Get Comment By Article
export const getCommentByArticle = async (req,res) => {
    try{
        const article = await Comment.find({article : req.params.id});
        res.json(article);
    }catch (error){
        res.status(500).json({message: error.message});
    }
}

// Create Comment
export const saveComment = async (req, res) => {
    const cekId = await Article.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: error.message});
    const comment = new Comment(req.body);
    try{
        const savedComment = await comment.save();
        res.status(201).json(savedComment);
    }catch (error) {
        res.status(400).json({message: error.message});
    }
}

// Update Comment
export const updateComment = async (req,res) => {
    const cekId = await Comment.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: error.message});
    try{
        const updatedComment = await Comment.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedComment);
    }catch (error){
        req.status(400).json({message: error.message});
    }
}

// Delete Comment
export const deleteComment = async (req,res) => {
    const cekId = await Comment.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: error.message});
    try{
        const deletedComment = await Comment.deleteOne({_id : req.params.id});
        res.status(200).json(deletedComment);
    }catch{
        res.status(400).json({message: error.message});
    }
}