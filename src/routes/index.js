const express = require('express')
const router = express.Router()
const ProductRouter = require('./products')


router
.use('/products', ProductRouter)


module.exports = router