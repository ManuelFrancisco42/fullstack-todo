import express from "express"
import { createTodoController, deleteTodoController, getAllTodoController, updateTodoController } from "../controllers/todoController.js"
import authenticationMiddleware from "../middleware/authenticationMiddleware.js"

const todosRoute = express.Router()

todosRoute.post('/', authenticationMiddleware, createTodoController)
todosRoute.get("/", authenticationMiddleware, getAllTodoController)
todosRoute.put("/:id", authenticationMiddleware, updateTodoController)
todosRoute.delete("/:id", authenticationMiddleware, deleteTodoController)
export default todosRoute