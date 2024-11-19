// contexts/TodoContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { pb } from "../lib/pocketbase";
import { useAuth } from "./AuthContext";

const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
  const { user } = useAuth();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (!user) {
      setTodos([]);

      return;
    }

    const fetchTodos = async () => {
      try {
        const todos = await pb.collection("todos").getFullList(200, {
          filter: `user_id="${user.id}"`,
        });
        setTodos(todos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, [user]);

  async function addTodo(text) {
    try {
      const todo = await pb.collection("todos").create({
        text,
        completed: false,
        user_id: user.id,
      });
      setTodos((oldTodos) => [...oldTodos, todo]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  }

  async function deleteTodo(id) {
    try {
      await pb.collection("todos").delete(id);
      setTodos((oldTodos) => oldTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  }

  async function toggleComplete(id) {
    const todo = todos.find((t) => t.id === id);
    try {
      const updatedTodo = await pb.collection("todos").update(id, {
        completed: !todo.completed,
      });
      setTodos((oldTodos) =>
        oldTodos.map((t) => (t.id === id ? updatedTodo : t))
      );
    } catch (error) {
      console.error("Error toggling complete:", error);
    }
  }

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, deleteTodo, toggleComplete }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export function useTodos() {
  const context = useContext(TodoContext);

  if (!context) throw new Error("useTodos must be used within an TodoProvider");

  return context;
}
