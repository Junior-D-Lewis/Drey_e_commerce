const prisma = require('../../prisma/client')

const getCartItems = async (req, res) => {
    const cartItems = await prisma.cartItem.findMany({
        include: {
            item: true
        }
    });

    if (!cartItems) {
        return res.status(404).json({ error: 'No items found' })
    }

    res.status(200).json(cartItems)
}

module.exports = getCartItems