const mongoose = require("mongoose")

const pasSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  features: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
})

const pasModel = mongoose.model("pas", pasSchema)

module.exports = pasModel
