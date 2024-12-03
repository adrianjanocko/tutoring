import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "./AuthContext";

const TodoContext = createContext(null);

export default function TodoProvider({ children }) {
  const { user } = useAuth();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (!user) {
      setTodos([]);
      return;
    }

    const fetchTodos = async () => {
      try {
        const { data, error } = await supabase.from("todos").select("*");

        if (error) throw error;
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, [user]);

  async function addTodo(text) {
    try {
      const { data, error } = await supabase
        .from("todos")
        .insert({
          text,
          completed: false,
          user_id: user.id,
        })
        .select();

      if (error) throw error;

      setTodos((oldTodos) => [...oldTodos, data[0]]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  }

  async function deleteTodo(id) {
    try {
      const { error } = await supabase.from("todos").delete().eq("id", id);

      if (error) throw error;
      setTodos((oldTodos) => oldTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  }

  async function toggleComplete(id) {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;

    try {
      const { data: updatedTodo, error } = await supabase
        .from("todos")
        .update({ completed: !todo.completed })
        .eq("id", id)
        .single();

      if (error) throw error;
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
}

export function useTodos() {
  const context = useContext(TodoContext);

  if (!context) throw new Error("useTodos must be used within an TodoProvider");

  return context;
}
