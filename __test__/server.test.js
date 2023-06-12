'use strict'

const supertest = require('supertest')
const {app} = require('../server')
 const req =supertest(app);

 describe('function test', ()=>{
    it('test the home function', async()=>{
        const res = await req.get('/');
        expect(res.body.message).toEqual("Welcome to Home page")
    })
    it('test the 404 function', async()=>{
        const res = await req.get('/404');
        expect(res.status).toEqual(404)
    })
 })