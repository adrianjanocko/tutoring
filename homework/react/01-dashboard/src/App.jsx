import RightColumn from "./layout/Aside";
import Hero from "./layout/Content";
import Navigation from "./layout/Sidebar";

function App() {
  return (
    <div className="h-screen grid grid-cols-[20vw_1fr_20vw]">
      <Navigation />

      <Hero />

      <RightColumn />
    </div>
  );
}

export default App;
