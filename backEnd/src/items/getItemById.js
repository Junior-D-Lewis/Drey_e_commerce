const prisma = require('../../prisma/client')

const getItemById = async (req, res) => {
    const { id } = req.params;
    const item = await prisma.item.findUnique({
        where: {
            id: parseInt(id)
        }
    });
    if (!item) {
        return res.status(404).json({ error: 'Item not found' })
    }
    res.status(200).json(item);
}

module.exports = getItemById;