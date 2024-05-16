const prisma = require('../../prisma/client');

const deleteCartItem = async (req, res) => {
    const { id } = req.params;
    
    const item = await prisma.cartItem.findFirst({
        where: {
            itemId: parseInt(id)
        }
    });

    if (!item) {
        return res.status(400).send('Invalid request data')
    }

    const cartItem = await prisma.cartItem.delete({
        where: {
            cartItemId: parseInt(item.cartItemId)
        }
    });

    return res.status(200).send( "Item deleted successfully")
}
module.exports = deleteCartItem;