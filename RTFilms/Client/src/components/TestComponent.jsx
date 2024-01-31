// Create a new file TestComponent.jsx
import React from "react"
import {useParams} from "react-router-dom"

const TestComponent = () => {
  const {id} = useParams()
  console.log("Rendering TestComponent with ID:", id)

  return <div>Test Component</div>
}

export default TestComponent
