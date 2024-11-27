import React from "react";

export default function Greet({ name }) {
  return (
    <div className="flex justify-between">
      <h1 className="text-purple text-xl">
        Welcome back <span className="font-bold">{name}!</span>
      </h1>
      <input
        type="text"
        placeholder="Search"
        className="border py-2 px-4 rounded-lg"
      />
    </div>
  );
}
