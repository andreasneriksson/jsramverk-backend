process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app.js');

chai.should();

chai.use(chaiHttp);


describe('Reports', () => {
    describe('GET /reports/week/1', () => {
        it('200 HAPPY PATH AND CORRECT VALUES', (done) => {
            chai.request(server)
                .get("/reports/week/1")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    res.body.data.reptext.should.be.an("string");
                    res.body.data.week.should.be.a("string", "1");
                    res.body.data.reptext.length.should.be.above(5);

                    done();
                });
        });
    });

    describe('GET /reports/week/2', () => {
        it('200 HAPPY PATH AND CORRECT VALUES', (done) => {
            chai.request(server)
                .get("/reports/week/2")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    res.body.data.reptext.should.be.an("string");
                    res.body.data.week.should.be.a("string", "2");
                    res.body.data.reptext.length.should.be.above(5);

                    done();
                });
        });
    });


    describe('POST /register', () => {
    it('TEST REGISTER A USER', (done) => {
        const body = {
            email: "tesing@testing.se",
            password: "testing"
        };

        chai.request(server)
            .post("/register")
            .send(body)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.an("object");
                done();
            });
    });
    });

    describe('POST /login', () => {
        it('TEST LOGIN TRUE USER', (done) => {
            const body = {
                email: "tesing@testing.se",
                password: "testing"
            };

            chai.request(server)
                .post("/login")
                .send(body)
                .end((err, res) => {
                    res.body.data.type.should.be.a("string", "success");
                    done();
                });
        });
        it('TEST LOGIN FALSE USER', (done) => {
            const body = {
                email: "testuser@testuser.se",
                password: "testuser"
            };

            chai.request(server)
                .post("/login")
                .send(body)
                .end((err, res) => {
                    res.should.have.status(401);
                    done();
                });
        });
    });
});