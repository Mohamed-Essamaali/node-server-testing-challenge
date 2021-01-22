const express = require('express')
const Prod = require('./products-model')

const router = express.Router()

const message = { message: "Welcome to CS"}

router.get('/', async (req,res,next)=>{

    const products = await Prod.find()
    // console.log('products',products)
    res.status(200).json(products)
})

module.exports = router