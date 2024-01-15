import {Outlet} from "react-router-dom"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signin from "./components/signin"
import Signup from "./components/signup"
import "./App.css"
import Cart from "./components/Cart"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
