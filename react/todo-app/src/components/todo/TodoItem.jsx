import React from "react";
import { Link } from "react-router-dom";

export default function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className="flex items-center justify-between gap-10">
      <Link to={`todo/${todo?.id}`} state={todo} className="underline">
        {todo?.text}
      </Link>
      <div className="flex gap-2">
        <button
          onClick={() => toggleComplete(todo?.id)}
          className={`btn btn-sm ${
            todo?.completed ? "btn-success" : "btn-outline btn-info"
          }`}
        >
          {todo?.completed ? "Completed" : "Mark Completed"}
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
