import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Router from "./routes"

const App = () => {
  return (
    <div className="webLayout">
      <Navbar />
      <Router />
      <Footer />
    </div>
  )
}

export default App
