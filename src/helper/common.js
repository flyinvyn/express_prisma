const response = (res, result,status, message,pagination)=>{
    const resultPrint = {}
    resultPrint.status = 'success'
    resultPrint.statusCode = status
    resultPrint.data = result
    if(resultPrint.data==""){
        delete resultPrint.data
    }
    resultPrint.message = message || null
    resultPrint.pagination = pagination || ""
    if(resultPrint.pagination==""){
        delete resultPrint.pagination
    }
    res.status(status).json(resultPrint)
}

module.exports = {response}