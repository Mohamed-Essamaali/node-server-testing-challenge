
const db = require('../data/config')

const find = () =>{
    return db('products')
}

module.exports = {find}