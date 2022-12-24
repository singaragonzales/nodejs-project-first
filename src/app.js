const express = require("express")
const morgan = require("morgan")
const path = require("path")

const app = express()

//Settings
app.set("port", process.env.PORT || 4000)

//Middlewares
app.use(morgan("dev"))
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({extended: false}))

//Routes
app.use(require("./routes/index.js"))

//statius files
app.use(express.static(path.join(__dirname, "public")))

module.exports = app
