import React from "react"
import ReactDOM from "react-dom/client"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from "./App.jsx"
import SingleLens from "./components/SingleLens.jsx"
import PointShoot from "./components/PointShoot.jsx"
import Lenses from "./components/Lenses.jsx"
import Film from "./components/Film.jsx"
import Clearance from "./components/Clearance.jsx"
import Home from "./components/Home.jsx"
import Accessories from "./components/Accessories.jsx"
import Signin from "./components/signin.jsx"
import Signup from "./components/signup.jsx"
import Success from "./components/Success.jsx"
import SingleProduct from "./components/SingleProducts.jsx"
import SearchBar from "./components/Searchbar.jsx"
import SearchbarPage from "./components/SearchbarPage.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/SingleLens",
        element: <SingleLens />,
      },
      {
        path: "*",
        element: <PointShoot />,
      },
      {
        path: "/Lenses",
        element: <Lenses />,
      },
      {
        path: "/Film",
        element: <Film />,
      },
      {
        path: "/Accessories",
        element: <Accessories />,
      },
      {
        path: "/Signin",
        element: <Signin />,
      },
      {
        path: "/Signup",
        element: <Signup />,
      },
      {
        path: "/Success",
        element: <Success />,
      },
      {path: "/search", element: <SearchbarPage />},
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
