import {useState} from "react"
import {BrowserRouter as Router} from "react-router-dom"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Cart from "./components/Cart"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Footer from "./components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cart />
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default App
