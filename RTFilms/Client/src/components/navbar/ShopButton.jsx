import {Dropdown} from "flowbite-react"
import {Link} from "react-router-dom"

function ShopButton() {
  return (
    <Dropdown
      label=""
      dismissOnClick={false}
      renderTrigger={() => <button>Shop</button>}
    >
      <Dropdown.Item>
        <Link
          to="/SingleLens"
          className="text-gray-900 dark:text-white"
          aria-current="page"
        >
          Single Lens Reflex
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link
          to="/PointShoot/products"
          className="text-gray-900 dark:text-white"
        >
          Point and Shoot
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/Polaroid" className="text-gray-900 dark:text-white ">
          Polaroid
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/Camcorder" className="text-gray-900 dark:text-white">
          Camcorder
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/Film" className="text-gray-900 dark:text-white">
          Film
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/Accessories" className="text-gray-900 dark:text-white ">
          Accessories
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/Batteries" className="text-gray-900 dark:text-white ">
          Batteries
        </Link>
      </Dropdown.Item>
    </Dropdown>
  )
}

export default ShopButton
