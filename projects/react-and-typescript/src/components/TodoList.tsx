import React from "react";
import { prependOnceListener } from "cluster";

interface TodoListProps {
  items: { id: string, text: string }[];
  onDeleteTodo: (todoId: string) => void;
};

const TodoList: React.FunctionComponent<TodoListProps> = props => {
  return <ul>
    { 
      props.items.map(todo => 
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button type="button" onClick={() => props.onDeleteTodo(todo.id)}>Delete</button>
        </li>) 
    }
  </ul>;
};

export default TodoList;