const PrismaClient = require('@prisma/client')
const items = require('../datas/items')

const prisma = new PrismaClient.PrismaClient()

module.exports = prisma;