import {Outlet} from "react-router-dom"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signin from "./components/signin"
import Signup from "./components/signup"
import "./App.css"
import Cart from "./components/Cart"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Footer from "./components/Footer"
import CartProvider from "./CartContext"

function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </CartProvider>
    </>
  )
}

export default App
