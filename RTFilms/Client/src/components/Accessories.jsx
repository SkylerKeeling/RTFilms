import {useEffect, useState} from "react"
import axios from "axios"

function PointShoot() {
  const [pas, setPas] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:3001/getPas")
      .then(pas => setPas(pas.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div class="grid grid-cols-4 gap-4">
      {pas.map(pas => {
        return (
          <>
            <div class="">
              <div class="w-full max-w-sm max-h-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    class="p-8 rounded-t-lg"
                    src={pas.imageUrl}
                    alt="product image"
                  />
                </a>
                <div class="px-5 pb-5">
                  <a href="#">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {pas.name}
                    </h5>
                  </a>
                  <div class="flex items-center mt-2.5 mb-5"></div>
                  <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">
                      Sold Out
                    </span>
                    <a
                      href="#"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      })}
    </div>
  )
}

export default PointShoot
