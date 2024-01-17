import {useState} from "react"
import {productsArray} from "../StoreProducts"
import {Dropdown, DropdownItem, DropdownMenu} from "react-bootstrap"

const getfilteredItems = (query, items) => {
  if (!query) {
    return items
  }
  return items.filter(productName => productName.includes(query))
}

export default function Searchbar() {
  const [query, setQuery] = useState("")

  const productName = productsArray
    .filter(product => product.name)
    .map(product => product.name)
  console.log(productName)

  const filteredItems = getfilteredItems(query, productName)
  console.log(filteredItems)

  return (
    <div className="Searchbar">
      <label>Search</label>
      <input type="text" onChange={e => setQuery(e.target.value)} />

      {filteredItems.map(productName => (
        <h1 key={productName}>{productName}</h1>
      ))}
    </div>
  )
}
