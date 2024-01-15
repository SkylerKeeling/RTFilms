const mongoose = require("mongoose")

const SLRSchema = new mongoose.Schema({
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

const SLRModel = mongoose.model("SLR", SLRSchema)

module.exports = SLRModel
