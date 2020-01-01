import { RequestHandler } from "express";
import { Todo } from "../models/todo.model";

const TODO_LIST: Todo[] = [];

// "RequestHandler" defines a function type:
//    (request: Request, response: Response, next: NextFunction) => void;
export const createTodo: RequestHandler = (request, response, next) => {
  console.log("Creating a new Todo item.");
  
  const text = (request.body as {text: string}).text;
  const newTodo = new Todo(Math.random().toString(), text);
  TODO_LIST.push(newTodo);

  response
    .status(201)
    .json({
      message: "Created new Todo item.",
      createdTodo: newTodo
    });
};