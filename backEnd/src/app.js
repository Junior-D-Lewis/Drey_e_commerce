const express = require('express')
const cors = require('cors')

const app = express();

const corsOptions ={
    origin:'*', 
    credentials:true,            
    optionSuccessStatus:200,
 }
 
app.use(cors(corsOptions))

app.use(express.json())
const router = express.Router();

app.use(router.get('/items', require('./items/getAllItems')))
app.use(router.get('/items/?id=', require('./items/getItemById')))
app.use(router.post('/cart/:id', require('./cart/addItemToCart')))
app.use(router.get('/cart', require('./cart/getCartItems')))
app.use(router.delete('/cart/:id', require('./cart/deleteCartItem')))
app.use(router.put('/cart/:id', require('./cart/updateCartItem')))

module.exports = app;