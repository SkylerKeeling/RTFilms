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
import Signin from "./components/navbar/signin.jsx"
import Signup from "./components/navbar/signup.jsx"
import Success from "./components/Success.jsx"
import SingleProduct from "./components/SingleProducts.jsx"
import SearchBar from "./components/navbar/Searchbar.jsx"
import SearchbarPage from "./components/navbar/SearchbarPage.jsx"
import Polaroid from "./components/Polaroid.jsx"
import Camcorder from "./components/Camcorder.jsx"
import Batteries from "./components/Batteries.jsx"

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
        path: "/Camcorder",
        element: <Camcorder />,
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
        path: "/Batteries",
        element: <Batteries />,
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
      {
        path: "/Polaroid",
        element: <Polaroid />,
      },
      {path: "/search", element: <SearchbarPage />},
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
