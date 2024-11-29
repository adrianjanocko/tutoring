import Aside from "./layout/Aside";
import Content from "./layout/Content";
import Sidebar from "./layout/Sidebar";

function App() {
  return (
    <div className="h-screen grid grid-cols-[20vw_1fr_20vw]">
      <Sidebar />
      <Content />
      <Aside />
    </div>
  );
}

export default App;
