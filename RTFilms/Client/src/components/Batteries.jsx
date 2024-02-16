import {Route, Routes, Link} from "react-router-dom"
import {productsArray} from "../StoreProducts"
import ProductCard from "./ProductCard"
import SingleProducts from "./SingleProducts"

function Batteries() {
  const baProducts = productsArray.filter(
    product => product.category === "batteries"
  )
  console.log("rendering PointShoot")
  return (
    <>
      <div className="PointShoot grid grid-cols-4 gap-4">
        {baProducts.map((product, idt) => (
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

export default Batteries
