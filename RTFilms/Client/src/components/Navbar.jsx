import React from "react"
import {Link} from "react-router-dom"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signin from "./signin"
import Signup from "./signup"
import {Modal, Button} from "react-bootstrap"
import {useState} from "react"
import {CartContext} from "../CartContext"
import {useContext} from "react"
import CartProduct from "./CartProduct"
import SearchBar from "./Searchbar"
import {productsArray} from "../StoreProducts"

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
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
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
            <div className="flex md:order-2">
              <button
                type="button"
                data-collapse-toggle="navbar-search"
                aria-controls="navbar-search"
                aria-expanded="false"
                className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>

              <SearchBar placeholder="Search" data={productsArray} />
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
              <a href="/Signin">sign in</a>
              <Button
                className="visible bg-dark"
                variant="dark"
                show={show}
                onClick={handleShow}
              >
                Cart ({productCount} Items)
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
                        className="bg-success"
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
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <Link
                  to="/SingleLens"
                  className="text-gray-900 dark:text-white"
                  aria-current="page"
                >
                  Single Lens Reflex
                </Link>
              </li>
              <li>
                <Link
                  to="/PointShoot/products"
                  className="text-gray-900 dark:text-white"
                >
                  Point and Shoot
                </Link>
              </li>
              <li>
                <Link to="/Polaroid" className="text-gray-900 dark:text-white ">
                  Polaroid
                </Link>
              </li>
              <li>
                <Link to="/Camcorder" className="text-gray-900 dark:text-white">
                  Camcorder
                </Link>
              </li>
              <li>
                <Link to="/Film" className="text-gray-900 dark:text-white">
                  Film
                </Link>
              </li>
              <li>
                <Link
                  to="/Accessories"
                  className="text-gray-900 dark:text-white "
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  to="/Batteries"
                  className="text-gray-900 dark:text-white "
                >
                  Batteries
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
