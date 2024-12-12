import React from "react";
import { useTodos } from "../../contexts/TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos, toggleComplete, deleteTodo } = useTodos();

  return (
    <ul className="grid gap-2">
      {todos.length > 0 ? (
        todos.map((todo, index) => {
          return (
            <TodoItem
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          );
        })
      ) : (
        <p>No todos found.</p>
      )}
    </ul>
  );
}
