import {Route, Routes, Link} from "react-router-dom"
import {productsArray} from "../StoreProducts"
import ProductCard from "./ProductCard"
import SingleProducts from "./SingleProducts"
import TestComponent from "./TestComponent"

function Camcorder() {
  const camProducts = productsArray.filter(
    product => product.category === "camcorder"
  )
  console.log("rendering PointShoot")
  return (
    <>
      <div className="PointShoot grid grid-cols-4 gap-4">
        {camProducts.map((product, idt) => (
          <div className="" key={idt}>
            <Link to={`/PointShoot/products/${product.id}`}>
              <ProductCard product={product}></ProductCard>
            </Link>
          </div>
        ))}
      </div>
      <Routes>
        <Route path="/PointShoot/products/:id" element={<SingleProducts />} />
      </Routes>
    </>
  )
}

export default Camcorder
