import React from "react";
import { prependOnceListener } from "cluster";

interface TodoListProps {
  items: { id: string, text: string }[];
}

const TodoList: React.FunctionComponent<TodoListProps> = props => {
  return <ul>
    { props.items.map(todo => <li key={todo.id}>{todo.text}</li>) }
  </ul>;
};

export default TodoList;