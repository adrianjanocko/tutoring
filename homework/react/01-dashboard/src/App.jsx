import Hero from "./components/Hero"
import Navigation from "./components/Navigation"
import RightColumn from "./components/RightColumn"

function App() {

  return (
    <div className="h-screen grid grid-cols-[20vw_1fr_20vw]">
      <div>
        <Navigation/>
      </div>
      <div>
        <Hero/>
      </div>
      <div>
        <RightColumn/>
      </div>
    </div>
  )
}

export default App
