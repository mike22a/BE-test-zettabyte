// import models
import {Article} from "../models/Article.js";

// Get All Article
export const getArticle = async (req,res) => {
    try{
        const article = await Article.find();
        res.json(article);
    }catch (error){
        res.status(500).json({message: error.message});
    }
}

// Get Single Article
export const getArticleById = async (req,res) => {
    try{
        const article = await Article.findById(req.params.id);
        res.json(article);
    }catch (error){
        res.status(404),json({message: error.message});
    }
}

// Create Article
export const saveArticle = async (req, res) => {
    const article = new Article(req.body);
    try{
        const savedArticle = await article.save();
        res.status(201).json(savedArticle);
    }catch (error) {
        res.status(400).json({message: error.message});
    }
}

// Update Article
export const updateArticle = async (req,res) => {
    const cekId = await Article.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: error.message});
    try{
        const updatedArticle = await Article.updateOne({_id: req.params.id}, {$set: erq.body});
        res.status(200).json(updatedArticle);
    }catch (error){
        req.status(400).json({message: error.message});
    }
}

// Delete Article
export const deleteArticle = async (req,res) => {
    const cekId = await Article.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: error.message});
    try{
        const deletedArticle = await Article.deleteOne({_id : req.params.id});
        res.status(200).json(deletedArticle);
    }catch{
        res.status(400).json({message: error.message});
    }
}
