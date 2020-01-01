import { Router } from "express";
import { createTodo, getAllTodos, getTodo, updateTodo, deleteTodo } from "../controllers/todo.controller";

// Register middleware (i.e. routes endpoints for incoming requests)
const router = Router();

// Get all Todos
router.get("/", getAllTodos);

// Get a Todo with the given id
router.get("/:id", getTodo);

// Create a Todo
router.post("/", createTodo);

// Update a Todo with the given id
router.patch("/:id", updateTodo);

// Delete a Todo with the given id
router.delete("/:id", deleteTodo);

export default router;