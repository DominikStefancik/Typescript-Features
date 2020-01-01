import { Response, RequestHandler } from "express";
import { Todo } from "../models/todo.model";

type RequestParamsType = { id: string };
type RequestBodyType = { text: string };
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

export const getAllTodos: RequestHandler = (request, response, next) => {
  console.log("Getting all Todo items.");

  response
    .status(200)
    .json({
      todos: TODO_LIST
    });
};

export const getTodo: RequestHandler<RequestParamsType> = (request, response, next) => {
  const todoId = request.params.id;
  console.log(`Getting a Todo item with id: ${todoId}`);

  const todo = TODO_LIST.find(todo => todo.id === todoId);

  if (!todo) {
    sendNonExistingTodoResponse(todoId, response);
    return;
  }
  
  response
      .status(200)
      .json({
        todo
      });
};

export const updateTodo: RequestHandler<RequestParamsType> = (request, response, next) => {
  const todoId = request.params.id;
  console.log(`Updating a Todo item with id: ${todoId}`);

  const todoIndex = TODO_LIST.findIndex(todo => todo.id === todoId);

  if (todoIndex === -1) {
    sendNonExistingTodoResponse(todoId, response);
    return;
  }

  const updatedText = (request.body as RequestBodyType).text;
  TODO_LIST[todoIndex] = new Todo(TODO_LIST[todoIndex].id, updatedText);
  
  response
      .status(200)
      .json({
        message: "Updated the Todo item.",
        todo: TODO_LIST[todoIndex]
      });
};

export const deleteTodo: RequestHandler<RequestParamsType> = (request, response, next) => {
  const todoId = request.params.id;
  console.log(`Deleting a Todo item with id: ${todoId}`);

  const todoIndex = TODO_LIST.findIndex(todo => todo.id === todoId);

  if (todoIndex === -1) {
    sendNonExistingTodoResponse(todoId, response);
    return;
  }

  TODO_LIST.splice(todoIndex, 1);
  
  response
    .status(200)
    .json({
      message: "Deleted the Todo item.",
      todos: TODO_LIST
    });
};

const sendNonExistingTodoResponse = (todoId: string, response: Response) => {
  response
      .status(400)
      .json({
        message: `A Todo with id ${todoId} doesn't exist.`
      });
}