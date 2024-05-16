const prisma = require('../../prisma/client');
const express = require ('express');

const router = express.Router();

const addItemToCart = async (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;
console.log('id', id)
    const item = await prisma.item.findUnique({
        where: {
            id: parseInt(id)
        }
    });

    if (!item) {
        return res.status(400).send('Invalid request data')
    }

    const cartItem = await prisma.cartItem.findFirst({
        where: {
            itemId: parseInt(id)
        }
    });
    if (cartItem) {
        const updatedCartItem = await prisma.cartItem.update({
            where: {
                cartItemId: cartItem.cartItemId
            },
            data: {
                quantity: cartItem.quantity + parseInt(quantity)
            }
        });

        return res.status(200).send('Item updated successfully')
    }else{
        const cartItem = await prisma.cartItem.create({
            data: {
                item: {
                    connect: {
                        id: parseInt(id)
                    }
                },
                quantity: parseInt(quantity)
            }
        });
    
        res.status(201).send( "Item added successfully")
    }
}

module.exports = addItemToCart;