import React, {useState} from "react"
import SearchIcon from "@mui/icons-material/Search"
import ClearIcon from "@mui/icons-material/Clear"
import "./Searchbar.css"

function SearchBar({placeholder, data}) {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState([])

  const handleFilter = event => {
    const searchWord = event.target.value
    setWordEntered(searchWord)
    const newFilter = data.filter(value => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase())
    })
    if (searchWord === "") {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }

  const clearInput = () => {
    setFilteredData([])
  }

  return (
    <form>
      <label
        for="default-search"
        class="ml-5 text-sm font-medium end-2.5 text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div class="relative w-min-32">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400 mr-10"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          onChange={handleFilter}
          value={wordEntered}
          className="block w-full text-center p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        />
        <button
          type="submit"
          class="text-white flex justify-center absolute w-1/3 end-2.5 bottom-2.5 bg-[#a47f5a] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResults">
          {filteredData.slice(0, 8).map((value, key) => {
            return (
              <>
                <a
                  className="dataItem"
                  href={`/PointShoot/products/${value.id}`}
                  target="_blank"
                >
                  {value.name}
                </a>
              </>
            )
          })}
        </div>
      )}
    </form>
  )
}

export default SearchBar
