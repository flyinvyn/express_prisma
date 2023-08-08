
const express = require('express')
const router = express.Router()
const {getAllProduct,getProduct,insertProduct,updateProduct,deleteProduct} = require('../controller/products')


router
    .get('/', getAllProduct)
    .get('/:id',getProduct)
    .post('/', insertProduct)
    .put('/:id', updateProduct)
    .delete('/:id', deleteProduct)

module.exports = router