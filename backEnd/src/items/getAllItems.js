const prisma = require('../../prisma/client')
const getAllItems = async (req, res) => {
    const items = await prisma.item.findMany()
    if(!items) return res.status(404).json({error: 'No items found'})
    res.status(200).json(items)
}
module.exports = getAllItems;