import {Route, Routes, Link} from "react-router-dom"
import {productsArray} from "../StoreProducts"
import ProductCard from "./ProductCard"
import SingleProducts from "./SingleProducts"
import TestComponent from "./TestComponent"

function Film() {
  const filmProducts = productsArray.filter(
    product => product.category === "film"
  )
  return (
    <>
      <div className="PointShoot grid grid-cols-4 gap-4">
        {filmProducts.map((product, idt) => (
          <div className="" key={idt}>
            <Link to={`/PointShoot/products/${product.id}`}>
              <ProductCard product={product}></ProductCard>
            </Link>
          </div>
        ))}
      </div>
      <Routes>
        <Route path="/Film/products/:id" element={<SingleProducts />} />
      </Routes>
    </>
  )
}

export default Film
