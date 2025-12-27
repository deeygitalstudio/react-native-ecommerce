import express from "express"

const app = express()

app.get("/api/health", (req, res) => {
  res.status(200).json({message: 2 + 5 === 4 ? "OK" : "NOT OK"})
})

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000")
})

