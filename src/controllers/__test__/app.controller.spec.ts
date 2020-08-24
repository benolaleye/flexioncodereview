import 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { TestCase2 } from '../../constants/MockData';

chai.use(chaiHttp);
chai.should();

describe('App Controller test spec', function () {
    describe('Endpoints should return the appropriate responses', function () {
        try {
            it('Should return conversion response', function () {
                chai.request('http://localhost:8000')
                    .post('/api/convert')
                    .type('form')
                    .send(TestCase2)
                    .end((err, res) => {
                        if (err) console.log(err);
                        res.should.have.status(200);
                        res.body.should.have.property('message');
                        res.body.should.have.property('correct');
                        res.body.should.be.a('object');
                    });
            });

            it('Should return invalid when it an invalid request', function () {
                chai.request('http://localhost:8000')
                    .post('/api/convert')
                    .type('form')
                    .send({
                        input_value: '',
                        head: '',
                        tail: '',
                        answer: '',
                    })
                    .end((err, res) => {
                        if (err) console.log(err);
                        res.should.have.status(200);
                        res.body.should.have.property('message', 'invalid');
                        res.body.should.be.a('object');
                    });
            });

            it('Should return all conversion types', function () {
                chai.request('http://localhost:8000')
                    .get('/api/types')
                    .end((err, res) => {
                        if (err) console.log(err);
                        res.should.have.status(200);
                        res.body.should.be.a('array').to.have.lengthOf(10);
                    });
            });
        } catch (error) {
            console.log(error);
        }
    });
});
