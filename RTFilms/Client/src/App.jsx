import {Outlet} from "react-router-dom"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css"
import Cart from "./components/Cart"
import Navbar from "./components/navbar/Navbar"
import Home from "./components/Home"
import Footer from "./components/Footer"
import CartProvider from "./CartContext"

const hexCode = "#ece4da"

function App() {
  return (
    <>
      <CartProvider>
        <style>{`body { background-color: ${hexCode} }`}</style>
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
