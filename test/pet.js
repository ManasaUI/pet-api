var should = require('should');
var supertest = require('supertest');

// This agent refers to PORT where program is runninng.
var server = supertest.agent('https://pet-api.herokuapp.com');


describe('Testing pet-api', function(){

    // before(function(done){
    //     done();
    // });

    // after(function(done){
    //     done();
    // });

    it('should return to the home page', function(done){
        server
        .get("/")
        .expect(200)
        .end(function(err, res){
            res.status.should.equal(200);
            done();
        });
    });

    it('should return 404', function(done){
        server
        .get('/api/pet')
        .expect(404)
        .end(function(err, res){
            res. statusCode.should.be.equal(404);
            done();
        });
    });


    it('should return pets', function(done){
        server
        .get('/api/pets/')
        .expect(200)
        .end(function(err, res){
            res.body.should.be.Object;
            done();
        });
    });

    it('should insert pet', function(done){
        server
        .post('/api/pets')
        .set('Content-type','application/json')
        .send({"name":"john","age":5,"color":"white","owner":"manasa","price":20})
        .expect(200)
        .end(function(err, res){
            res.body.should.be.Object;
            res.body._id.should.be.GUID;
            done();
        });
    });


});