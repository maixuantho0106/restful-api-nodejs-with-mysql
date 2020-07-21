const express = require('express');
const router = express.Router();

const products = require('../module/product');

router.get('/', async(req, res, next) => {
    const data = await products.selectAll();
    res.status(200).json({
        message: 'Request products supported method GET/',
        data: data
    })
})

router.get('/product', async(req, res, next) => {
    const id = req.query.id;
    const data = await products.selectID(id);
    res.status(200).json({
        data: data
    })
})

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Request products supported method POST/'
    })
})

module.exports = router;