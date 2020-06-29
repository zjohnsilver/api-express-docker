import express from "express"
import bodyParser from "body-parser"

const app = express()

const port = process.env.PORT

app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("Hello Babel")
})

app.listen(port, () => {
  console.log(`🚀 Listening on port ${port}`)
})