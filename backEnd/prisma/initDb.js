const prisma = require('./client')
const items = require('../datas/items')

async function initDb() {
    items.forEach(async (item) => {
        await prisma.item.create({
            data: item
        })
    })
}

initDb()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })