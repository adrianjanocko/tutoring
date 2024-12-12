import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <ul className="grid gap-2">
      {todos.map((todo, index) => {
        return (
          <TodoItem
            key={index}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
