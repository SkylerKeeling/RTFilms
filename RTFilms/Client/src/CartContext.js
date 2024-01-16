import {createContext, useState} from "react"

const CardContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  totalCostOfCart: () => {},
})

function getCartQuantity(_id) {
  const quantity = cartProducts.find(products => products._id === _id)?.quantity

  if (quantity === undefined) {
    return 0
  }

  return quantity
}

function addOneToCart(_id) {
  const quantity = getProductQuantity(_id)

  if (quantity == 0) {
    ;[
      ...setCartProducts,
      {
        _id: _id,
        quantity: 1,
      },
    ]
  } else {
    setCartProducts(
      cartProducts.map(product =>
        product._id === _id
          ? {...product, quantity: product.quantity + 1}
          : product
      )
    )
  }
}

export function CartProvider({Children}) {
  const [cartProducts, setCartProducts] = useState([])
  const contextValue = {
    items: [],
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    totalCostOfCart,
  }
  return (
    <CardContext.Provider value={contextValue}>{Children}</CardContext.Provider>
  )
}
