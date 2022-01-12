import express from "express";

// import controller
import {getArticle, getArticleById, saveArticle, updateArticle, deleteArticle} from "../controllers/articleController.js";

const router = express.Router();

// import route
router.get('/', getArticle);
router.get('/:id', getArticleById);
router.post('/',saveArticle);
router.patch('/:id',updateArticle);
router.delete('/:id',deleteArticle);

// export router
export default router;