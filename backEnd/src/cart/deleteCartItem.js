const prisma = require('../../prisma/client');

const deleteCartItem = async (req, res) => {
    
    const item = await prisma.item.findUnique({
        where: {
            id: parseInt(id)
        }
    });

    if (!item) {
        return res.status(400).send('Invalid request data')
    }

    const cartItem = await prisma.cartItem.delete({
        where: {
            id: parseInt(id)
        }
    });

    res.status(200).send( "Item deleted successfully")
}
module.exports = deleteCartItem;