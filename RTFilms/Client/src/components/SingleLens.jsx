import {productsArray} from "../StoreProducts"
import ProductCard from "./ProductCard"

function PointShoot() {
  const slrProducts = productsArray.filter(
    productsArray => productsArray.category === "slr"
  )
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {slrProducts.map((slrProducts, idt) => (
          <div className="" key={idt}>
            <ProductCard product={slrProducts} />
          </div>
        ))}
      </div>
    </>
  )
}

export default PointShoot
