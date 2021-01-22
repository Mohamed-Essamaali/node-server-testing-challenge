const superTest = require('supertest')
const server = require('../server')
const db = require('../data/config')

// beforeEach(async ()=>{
//     await db.seed.run()
// })
afterAll(async ()=>{
    await db.destroy()
})


describe('test product list', ()=>{
    it('get all products', async ()=>{
        const res = await superTest(server).get('/')
        expect(res.statusCode).toBe(200)
        expect(res.body[3].name).toEqual('pliers')
    })
})