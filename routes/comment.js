import express from "express";

// import controller
// import {getArticle, getArticleById, saveArticle, updateArticle, deleteArticle} from "../controllers/articleController.js";
import {deleteComment, getCommentByArticle, saveComment, updateComment} from "../controllers/commentController.js"; 

const router = express.Router();

// import route
// router.get('/', getComment);
router.get('/:id', getCommentByArticle);
// router.post('/',saveComment);
router.patch('/:id',updateComment);
router.delete('/:id',deleteComment);

router.post('/:id', saveComment);

// export router
export default router;