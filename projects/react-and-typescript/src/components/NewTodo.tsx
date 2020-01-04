import React, { useRef } from "react";
import "./NewTodo.css";

interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FunctionComponent<NewTodoProps> = props => {
  // "useRef" is a React hook, a special function which can be executed in a function component
  // to add specific functionalities to the component
  // we can store and use the reference to the hook to assign it to a DOM element and then interact
  // with that DOM element from inside our code
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
  };

  return <form onSubmit={todoSubmitHandler}>
    <div>
      <label htmlFor="todo-text">Todo Text</label>
      <input id="todo-text" type="text" ref={textInputRef}/>
    </div>
    <button type="submit">Add Todo</button>
  </form>;
}

export default NewTodo;