import 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { TestCase2 } from '../../constants/MockData';

chai.use(chaiHttp);
chai.should();

describe('App Controller test spec', function () {
    describe('Endpoint should return the appropriate responses', function () {
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

            it('Should return invalid when invalid request', function () {
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
        } catch (error) {
            console.log(error);
        }
    });
});
