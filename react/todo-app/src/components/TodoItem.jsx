import React from "react";

export default function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className="flex items-center justify-between">
      <span>{todo?.text}</span>
      <div className="flex gap-2">
        <button
          onClick={() => toggleComplete(todo?.id)}
          className={`btn btn-sm ${
            todo.completed ? "btn-success" : "btn-outline btn-info"
          }`}
        >
          {todo.completed ? "Completed" : "Mark Completed"}
        </button>
        <button
          onClick={() => deleteTodo(todo?.id)}
          className="btn btn-sm btn-error"
        >
          Remove Todo
        </button>
      </div>
    </li>
  );
}
