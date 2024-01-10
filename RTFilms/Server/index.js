const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const PasModel = require("./Motels/users")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(
  "mongodb+srv://xertzgaming1:obTbkU9XuKSzAI63@cluster0.b0rwnl2.mongodb.net/products?retryWrites=true&w=majority"
)

app.get("/getPas", (req, res) => {
  PasModel.find({})
    .then(function (pas) {
      res.json(pas)
    })
    .catch(function (err) {
      res.json(err)
    })
})

app.listen(3001, () => {
  console.log("Server is running")
})
