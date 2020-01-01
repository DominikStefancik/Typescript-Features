import { Router } from "express";
import { createTodo } from "../controllers/todo.controller";

// Register middleware (i.e. routes endpoints for incoming requests)
const router = Router();

// Get all Todos
router.get("/");

// Get a Todo with the given id
router.get("/:id");

// Create a Todo
router.post("/", createTodo);

// Update a Todo with the given id
router.patch("/:id");

// Delete a Todo with the given id
router.delete("/:id");

export default router;