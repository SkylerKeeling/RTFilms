import {CartContext} from "../CartContext"
import {useContext} from "react"

function ProductCard(props) {
  const product = props.product
  const cart = useContext(CartContext)
  const productQuantity = cart.getProductQuantity(product.id)

  return (
    <div class="w-full max-w-[260px] max-h-[482px] min-w-[260px] min-h-[482px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          class="p-8 rounded-t-lg"
          src={product.imageUrl}
          alt="product image"
        />
      </a>
      <div class="px-5 pb-5">
        <a href="#">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5"></div>
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900 dark:text-white"></span>
          <button
            href="#"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => cart.addOneToCart(product.id)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
export default ProductCard
