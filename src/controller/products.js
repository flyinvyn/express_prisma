const { selectAll, select, insert, update, deleteData, countData, findId } = require('../model/products')
const commonHelper = require('../helper/common')



const ProductController = {
  getAllProduct: async (req, res) => {
    try {
      const page = Number(req.query.page) || 1
      const limit = Number(req.query.limit) || 5
      const offset = (page - 1) * limit
      const sort = req.query.sort || "asc"
      const result = await selectAll({ limit, offset, sort })
      const totalData = await countData()
      const totalPage = Math.ceil(totalData / limit)
      const pagination = {
        currentPage: page,
        limit,
        totalData,
        totalPage
      }
      console.log(result);
      commonHelper.response(res, result, 200, "get data success", pagination)
    } catch (error) {
      console.log(error);
    }
  },
  getProduct: async (req, res) => {
    const id = Number(req.params.id)
    const rowCount = await findId(id)
    if (!rowCount) {
      return commonHelper.response(res, "", 404, "id is not found")
    }
    await select(id)
      .then(
        (result) => {
          commonHelper.response(res, result, 200, "get data success")
        }
      )
      .catch(err => res.send(err)
      )
  },
  insertProduct: async (req, res) => {
    const { name, stock, price } = req.body
    const data = { name, stock, price }
    await insert(data)
      .then(
        result => commonHelper.response(res, result, 201, "Product created")
      )
      .catch(err => res.send(err)
      )
  },
  updateProduct: async (req, res) => {
    const id = Number(req.params.id)
    const rowCount = await findId(id)
    if (!rowCount) {
      return commonHelper.response(res, "", 404, "id is not found")
    }
    const { name, stock, price } = req.body
    const data = { id, name, stock, price }
    await update(data)
      .then(
        (result) => commonHelper.response(res, result, 200, "Product updated")
      )
      .catch(err => res.send(err)
      )
  },
  deleteProduct: async (req, res) => {
    const id = Number(req.params.id)
    const rowCount = await findId(id)
    if (!rowCount) {
      return commonHelper.response(res, "", 404, "id is not found")
    }
    await deleteData(id)
    .then(
      result => commonHelper.response(res, result, 200, "Product deleted")
    )
    .catch(err => res.send(err)
    )
  }
}

module.exports = ProductController