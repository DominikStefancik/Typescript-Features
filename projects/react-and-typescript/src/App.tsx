import React from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

const App: React.FunctionComponent = () => {
  const todoList = [
    { id: "t1", text: "First TODO item"}
  ];

  const todoAddHandler = (text: string) => {
    
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList items={todoList}/>
    </div>
  );
}

export default App;
