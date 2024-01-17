import {productsArray} from "../StoreProducts"
import ProductCard from "./ProductCard"

function PointShoot() {
  const pasProducts = productsArray.filter(
    productsArray => productsArray.category === "pas"
  )
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {pasProducts.map((pasProducts, idt) => (
          <div className="" key={idt}>
            <ProductCard product={pasProducts} />
          </div>
        ))}
      </div>
    </>
  )
}

export default PointShoot
