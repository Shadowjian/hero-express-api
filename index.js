const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const mongoose = require("mongoose")
const userRoute = require("./routes/user")
require("dotenv/config")

// Init Express App
const app = express()

// ENVs
const PORT = process.env.PORT || 8000
const DB = process.env.MONGO_URI

// Middlewares
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

// Connect to DB
mongoose.set("strictQuery", false)
mongoose.connect(DB).then(() => {
  app.listen(PORT, () =>
    console.log(`Connected to MDB and listening on PORT ${PORT}!`)
  )
})

// ROUTES
app.use("/api/users", userRoute)
