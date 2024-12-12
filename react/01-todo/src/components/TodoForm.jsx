import React, { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    addTodo(newTodo);
    setNewTodo("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
        placeholder="Add new Todo"
        className="input input-bordered w-full max-w-xs"
      />
      <button type="submit" className="btn btn-success">
        Add Todo
      </button>
    </form>
  );
}
