import React, { createContext, useContext, useEffect, useState } from "react";
import { logout, pb } from "../lib/pocketbase";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(pb.authStore.model);

  useEffect(() => {
    const handleAuthChange = (token, model) => setUser(model);
    const unsubscribe = pb.authStore.onChange(handleAuthChange);

    if (!pb.authStore.isValid) logout();

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) throw new Error("useAuth must be used within an AuthProvider");

  return context;
}
