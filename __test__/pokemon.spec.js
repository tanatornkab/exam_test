const request = require('supertest')
const app = require('../app')
const expect = require('chai').expect

describe('GET /pokemon',()=>{
    it('GET should be return pokemon',(done)=>{
        request(app).get('/pokemon/pokemons')
        .end((err,res) => {
           expect(res.statusCode).to.equals(200)

            let result = res.body
           expect(result).to.be.an("array")
            
           let p = result[0]
           expect(p).to.have.property('_id')
           expect(p).to.have.property('name')
           done()
       })
    })

})

describe('POST /pokemon',()=>{
    it('POST should be return pokemon',(done)=>{
        request(app).post('/pokemon/pokemons')
        .send({name:"testname",type:"testtype"})
        .end((err,res) => {
           expect(res.statusCode).to.equals(201)

           let p = res.body
           expect(p).to.be.an('object')
           expect(p).to.have.property('name')
           expect(p).to.have.property('type')
           

           done()
       })
    })  
    
})
//test api jwt


describe('GET /me',()=>{
    it('should return 401 Unauthorized when token unavialable"',(done) =>{
        request(app).get('/member/me')
        .end((err,res) => {
            expect(res.statusCode).to.equals(401)
            done()
        })
    })

    it('should return 401 Unauthorized when token unavialable"',(done) =>{
        request(app).get('/member/me')
        .set('Authorization','123456789')
        .end((err,res) => {
            expect(res.statusCode).to.equals(401)
            done()
        })
    })
    
})


/*
const request = require('supertest') 
const chai = require('chai')
const app = require('../app')
chai.should()

describe('GET /pokemons',()=>{
    it('should return 200 ok with "Hello world"',(done) =>{
        request(app).get('/')
        .expect(200)
        .end((err,res) => {
            
            res.body.should.to.be.a("object")
            done()
        })
    })
})*/