import React, { useRef } from "react";

const NewTodo: React.FunctionComponent = () => {
  // "useRef" is a React hook, a special function which can be executed in a function component
  // to add specific functionalities to the component
  // we can store and use the reference to the hook to assign it to a DOM element and then interact
  // with that DOM element from inside our code
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
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