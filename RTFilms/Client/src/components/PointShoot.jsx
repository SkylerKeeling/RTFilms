import {useEffect, useState} from "react"
import axios from "axios"

function PointShoot() {
  const [pas, setPas] = useState([])
  useEffect(() => {
    axios.get("http:localhost:3001/getPas").then(pas => setPas(pas.data))
  }, [])
}
