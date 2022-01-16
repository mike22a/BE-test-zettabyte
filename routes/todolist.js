import express from "express";

// import controller
import {getTodolist, getTodolistById, saveTodolist, updateTodolist, updateTodolist2, deleteTodolist} from "../controllers/todolistController.js";

const router = express.Router();

// import route
router.get('/', getTodolist);
router.get('/:id', getTodolistById);
router.post('/',saveTodolist);
router.patch('/:id',updateTodolist);
router.put('/:id',updateTodolist2);
router.delete('/:id',deleteTodolist);

// export router
export default router;