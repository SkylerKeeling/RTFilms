import {Route, Routes, Link} from "react-router-dom"
import {productsArray} from "../../StoreProducts"
import ProductCard from "../ProductCard"
import SingleProducts from "../SingleProducts"

export default function bestsellers() {
  const pasProducts = productsArray.filter(
    product => product.category === "pas"
  )
  return (
    <>
      <div class="bg-[#ece4da]">
        <h2 class="text-4xl m-5 font-bold  text-gray-900">Bestsellers</h2>
        <div className="PointShoot grid grid-cols-4 gap-4 m-20 mt-0">
          {pasProducts.slice(40, 44).map((product, idt) => (
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
      </div>
      <div></div>
    </>
  )
}
