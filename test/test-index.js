const chai = require('chai');
const chaiHttp = require('chai-http');

const {app, runServer, closeServer} = require('../server');

const should = chai.should();

chai.use(chaiHttp);


describe('Logs', function() {

    before(function() {
        return runServer();
    });

    after(function() {
        return closeServer();
    });

    it('should list logs on GET', function() {
        return chai.request(app)
            .get('/logs/user/:user')
            .then(res => {

            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.an('object');
        });
    });

    it('should add a logs on POST', function() {
        const newLog = {
            date: '09/28/18',
            stress: 2,
            gratitude: 4,
            energy: 3,
            communityFeeling: 4,
            waterIntake: 48,
            cleanEating: 3,
            exercise: 4,
            sleepStartHr: 22,
            sleepStartMin: 15,
            sleepEndHr: 7,
            sleepEndMin: 0,
            user: 'test'
        };
        return chai.request(app)
            .post('/logs')
            .send(newLog)
            .then(function(res) {
            res.should.have.status(401);
            res.body.should.be.an('object');
        });
    });

    it('should update logs on PUT', function() {

        const updateData = {
            date: '09/28/18',
            stress: 2,
            gratitude: 5,
            energy: 3,
            communityFeeling: 4,
            waterIntake: 48,
            cleanEating: 2,
            exercise: 3,
            sleepStartHr: 22,
            sleepStartMin: 15,
            sleepEndHr: 7,
            sleepEndMin: 0,
            user: 'test'
        };

        return chai.request(app)
            .get('/logs')
            .then(function(res) {
            return chai.request(app)
                .put('/logs/:id')
                .send(updateData)
        })
            .then(function(res) {
            res.should.have.status(400);
        });
    });

    it('should delete logs on DELETE', function() {
        return chai.request(app)
            .get('/logs')
            .then(function(res) {
            return chai.request(app)
                .delete('/logs/:id')
        })
            .then(function(res) {
            res.should.have.status(500);
        });
    });
});