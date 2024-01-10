import React from "react"
import ReactDOM from "react-dom"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from "./App.jsx"
import SingleLens from "./components/SingleLens.jsx"
import PointShoot from "./components/PointShoot.jsx"
import Lenses from "./components/Lenses.jsx"
import Film from "./components/Film.jsx"
import Clearance from "./components/Clearance.jsx"
import Home from "./components/Home.jsx"

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
        path: "/PointShoot",
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
        path: "/Clearance",
        element: <Clearance />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
