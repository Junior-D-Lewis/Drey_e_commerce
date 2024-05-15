const express = require ('express');

const router = express.Router();

const routes = () => {  
    router.get('/items', require('./items/getAllItems'))
    return router;
}