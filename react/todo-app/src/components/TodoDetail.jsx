import React from "react";
import { useLocation } from "react-router-dom";

export default function TodoDetail() {
  const location = useLocation();
  const data = location?.state;

  return (
    <div className="grid gap-6">
      <h2 className="text-xl font-bold text-center">Todo data</h2>
      <ul>
        <li>id: {data.id}</li>
        <li>text: {data.text}</li>
        <li>completed?: {data.completed ? "yes" : "no"}</li>
      </ul>
    </div>
  );
}
