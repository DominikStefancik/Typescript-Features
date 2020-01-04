import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./models/todo.model";

const App: React.FunctionComponent = () => {
  // "useState" is a React hook which is used for a state management
  // it returns an array with exactly two elements: 
  //      first is the latest state snapshot, the second is a function to udate that state and 
  //      rerender a component
  const [state, setState] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setState(previousState => [
      ...previousState, // copy a previous state of the array
      {id: Math.random().toString(), text: text} // and add a new Todo item
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setState(previousState => previousState.filter(todo => todo.id !== todoId));
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList items={state} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
}

export default App;
