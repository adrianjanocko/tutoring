import React from "react";
import Aside from "./components/aside/Aside";
import Content from "./components/content/Content";
import Sidebar from "./components/sidebar/Sidebar";

export default function App() {
  return (
    <div>
      <Sidebar />
      <Content />
      <Aside />
    </div>
  );
}
