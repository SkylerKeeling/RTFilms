import {useState} from "react"
import {productsArray} from "../StoreProducts"
import "./Searchbar.css"

const productName = productsArray
  .filter(product => product.name)
  .map(product => product.name)
console.log(productName)

export default function Searchbar() {
  const [value, setValue] = useState("")

  const onChange = event => {
    setValue(event.target.value)
  }

  const onSearch = searchTerm => {
    setValue(searchTerm)
    // our api to fetch the search result
    console.log("search ", searchTerm)
  }

  return (
    <div className="Searchbar">
      <h1>Search</h1>

      <div className="search-container">
        <div className="search-inner">
          <input type="text" value={value} onChange={onChange} />
          <button onClick={() => onSearch(value)}> Search </button>
        </div>
        <div className="dropdown">
          {productName
            .filter(item => {
              const searchTerm = value.toLowerCase()

              return (
                searchTerm &&
                item.toLowerCase().startsWith(searchTerm) &&
                item.toLowerCase() !== searchTerm
              )
            })
            .slice(0, 10)
            .map(item => (
              <div
                onClick={() => onSearch(item)}
                className="dropdown-row"
                key={item}
              >
                {item}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
