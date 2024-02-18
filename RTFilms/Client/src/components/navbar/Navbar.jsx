import React from "react"
import {Link} from "react-router-dom"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Modal, Button} from "react-bootstrap"
import {useState} from "react"
import {CartContext} from "../../CartContext"
import {useContext} from "react"
import CartProduct from "../CartProduct"
import SearchBar from "./Searchbar"
import {productsArray} from "../../StoreProducts"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import ShopButton from "./ShopButton"

export default function Navbar() {
  const cart = useContext(CartContext)

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({items: cart.items}),
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        if (response.url) {
          window.location.assign(response.url)
        }
      })
  }

  const productCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  )

  return (
    <>
      <nav className="bg-[#ece4da] w-full border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a className="flex items-center">
            <Link
              href="/"
              className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >
              RTFilms
            </Link>
          </a>
          <div className="flex items-center">
            <ShopButton />
            <div className="w-[250px] m-2">
              <SearchBar
                placeholder="Search"
                className="w-full"
                data={productsArray}
              />
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <a href="/Signin">
              <FavoriteBorderIcon />
            </a>
            <Button
              className="visible"
              variant=""
              show={show}
              onClick={handleShow}
            >
              <ShoppingCartIcon />
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Cart</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {productCount > 0 ? (
                  <>
                    <p>Items in your cart:</p>
                    {cart.items.map((currentProduct, idx) => (
                      <CartProduct
                        key={idx}
                        id={currentProduct.id}
                        quantity={currentProduct.quantity}
                      />
                    ))}
                    <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
                    <Button
                      variant="success"
                      className="bg-[#582817]"
                      onClick={checkout}
                    >
                      Checkout
                    </Button>
                  </>
                ) : (
                  <h1>No items in cart</h1>
                )}
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </nav>
    </>
  )
}
