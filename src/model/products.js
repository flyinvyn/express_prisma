const { PrismaClient } = require('@prisma/client');
const Prisma = new PrismaClient()

const selectAll = ({limit,offset,sort}) => {
    return Prisma.product.findMany({
        skip:offset,
        take: limit,
        orderBy: {
            id: sort,
          },
    })
}

const select = (id) => {
    return Prisma.product.findUnique({
        where: {
            id,
        },
    })
}
const insert = (data) => {
    const { name, stock, price } = data
    return Prisma.product.create({
        data: {
            name,
            price,
            stock
        },
    })
}
const update = (data) => {
    const { id, name, stock, price } = data
    return Prisma.product.update({
        where: {
            id
        },
        data: {
            name,
            price,
            stock
        },
    })
}
const deleteData = (id) => {
    return Prisma.product.delete({
        where: {
            id,
        },
    })
}

const countData = () => {
    return Prisma.product.count()
}

const findId = (id) => {
    return Prisma.product.findUnique({
        where: {
            id,
        },
        select: {
            id: true
        },

    })
}

module.exports = {
    selectAll,
    select,
    insert,
    update,
    deleteData,
    countData,
    findId
}