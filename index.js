const express = require('express')
require('dotenv').config()
const cors = require('cors')
const morgan = require('morgan')
const app = express()


const mainRouter = require("./src/routes/index")

const port = process.env.PORT
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use('/', mainRouter)



app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})