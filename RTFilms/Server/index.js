const express = require("express")
const cors = require("cors")
const stripe = require("stripe")(
  "sk_test_51OZc5bAg1LP2ocYwVh8CyNQKGZng8P4aCp90g5udYzctNRDoBkHAoOQmhDFyNYzMYsgjOCepE2Uj1Ug6DsXB3MZ500C2Losxyk"
)
const app = express()
app.use(cors())
app.use(express.static("public"))
app.use(express.json())

app.post("/checkout", async (req, res) => {
  console.log(req.body)
  const items = req.body.items
  let lineItems = []
  items.forEach(item => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    })
  })

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:5173/Success",
    cancel_url: "http://localhost:3000/cancel",
  })

  res.send(
    JSON.stringify({
      url: session.url,
    })
  )
})

app.listen(4000, () => console.log("Listening on port 4000!"))
