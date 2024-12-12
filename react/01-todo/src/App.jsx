import { React } from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/auth/PrivateRoute";
import Register from "./components/auth/Register";
import TodoDetail from "./components/todo/TodoDetail";
import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";
import AuthProvider, { useAuth } from "./contexts/AuthContext";
import TodoProvider, { useTodos } from "./contexts/TodoContext";

function Navbar() {
  const { user, logout } = useAuth();

  const getNavClass = ({ isActive }) =>
    isActive ? "btn btn-success text-white" : "";

  return (
    <nav>
      <ul className="flex items-center justify-center gap-6">
        <li>
          <NavLink className={getNavClass} to="/">
            Home
          </NavLink>
        </li>
        {user ? (
          <>
            <li>
              <NavLink className={getNavClass} to="/add">
                Add Todo
              </NavLink>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </>
        ) : (
          <li>
            <NavLink className={getNavClass} to="/register">
              Register
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <TodoProvider>
        <BrowserRouter>
          <div className="h-screen py-4 grid">
            <Navbar />
            <div className="place-items-center">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/add"
                  element={
                    <PrivateRoute>
                      <TodoForm />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/todo/:todoId"
                  element={
                    <PrivateRoute>
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
      </TodoProvider>
    </AuthProvider>
  );
}

function Home() {
  const { user } = useAuth();
  const { todos, toggleComplete, deleteTodo } = useTodos();

  return user ? (
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
  );
}
