import React from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

const App: React.FunctionComponent = () => {
  const todoList = [
    { id: "t1", text: "First TODO item"}
  ];

  return (
    <div className="App">
      <NewTodo />
      <TodoList items={todoList}/>
    </div>
  );
}

export default App;
