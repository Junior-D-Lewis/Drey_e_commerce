const prisma = require('../../prisma/client');

const updateCartItem = async (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;

    const cartItem = await prisma.cartItem.update({
        where: {
            cartItemId: parseInt(id)
        },
        data: {
            quantity: parseInt(quantity)
        }
    });

    res.status(200).json({ "message": "Cart updated." })
}

module.exports = updateCartItem;