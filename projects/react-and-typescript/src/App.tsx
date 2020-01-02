import React from "react";
import TodoList from "./components/TodoList";

const App: React.FunctionComponent = () => {
  const todoList = [
    { id: "t1", text: "First TODO item"}
  ];

  return (
    <div className="App">
      <TodoList items={todoList}/>
    </div>
  );
}

export default App;
