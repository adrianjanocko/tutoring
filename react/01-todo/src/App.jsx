import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import TodoDetail from "./components/TodoDetail";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await axios.get(
          "http://localhost:8090/api/collections/todos/records"
        );
        setTodos(response.data.items);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    }
    fetchTodos();
  }, []);

  async function addTodo(text) {
    try {
      const response = await axios.post(
        "http://localhost:8090/api/collections/todos/records",
        {
          text,
          completed: false,
        }
      );
      setTodos((oldTodos) => [...oldTodos, response.data]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  }

  async function deleteTodo(id) {
    try {
      await axios.delete(
        `http://localhost:8090/api/collections/todos/records/${id}`
      );
      setTodos((oldTodos) => oldTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  }

  async function toggleComplete(id) {
    const todo = todos.find((t) => t.id === id);
    try {
      const response = await axios.patch(
        `http://localhost:8090/api/collections/todos/records/${id}`,
        {
          completed: !todo.completed,
        }
      );
      setTodos((oldTodos) =>
        oldTodos.map((t) => (t.id === id ? response.data : t))
      );
    } catch (error) {
      console.error("Error toggling complete:", error);
    }
  }

  const activeNavClass = "btn btn-success text-white";

  return (
    <BrowserRouter>
      <div className="h-screen py-4 grid">
        <nav>
          <ul className="flex items-center justify-center gap-6">
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? activeNavClass : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? activeNavClass : "")}
                to="/add"
              >
                Add Todo
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="place-items-center">
          <Routes>
            <Route
              path="/"
              element={
                <TodoList
                  todos={todos}
                  toggleComplete={toggleComplete}
                  deleteTodo={deleteTodo}
                />
              }
            />
            <Route path="/add" element={<TodoForm addTodo={addTodo} />} />
            <Route path="/todo/:todoId" element={<TodoDetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
