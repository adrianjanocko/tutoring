import { React, useEffect, useState } from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/auth/PrivateRoute";
import Register from "./components/auth/Register";
import TodoDetail from "./components/TodoDetail";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { logout, pb } from "./lib/pocketbase";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState(pb.authStore.model);

  useEffect(() => {
    return pb.authStore.onChange(async (token, model) => {
      setUser(model);

      if (!model) setTodos([]);
    });
  }, []);

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

  async function checkAuth() {
    const isValid = pb.authStore.isValid;

    if (!isValid) logout();
  }

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (user) {
      async function fetchTodos() {
        try {
          const todos = await pb.collection("todos").getFullList(200, {
            filter: `user_id="${user.id}"`,
          });
          setTodos(todos);
        } catch (error) {
          console.error("Error fetching todos:", error);
        }
      }

      fetchTodos();
    }
  }, [user]);

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
            {user ? (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? activeNavClass : ""
                    }
                    to="/add"
                  >
                    Add Todo
                  </NavLink>
                </li>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </>
            ) : (
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? activeNavClass : "")}
                  to="/register"
                >
                  Register
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
        <div className="place-items-center">
          <Routes>
            <Route
              path="/"
              element={
                user ? (
                  <TodoList
                    todos={todos}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                  />
                ) : (
                  <p>
                    You must{" "}
                    <Link to="/login" className="underline text-green-600">
                      Login
                    </Link>{" "}
                    to see your todos.
                  </p>
                )
              }
            />
            <Route
              path="/add"
              element={
                <PrivateRoute user={user}>
                  <TodoForm addTodo={addTodo} />
                </PrivateRoute>
              }
            />
            <Route
              path="/todo/:todoId"
              element={
                <PrivateRoute user={user}>
                  <TodoDetail />
                </PrivateRoute>
              }
            />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
