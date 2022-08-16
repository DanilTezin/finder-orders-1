
import app from '../index';

const supertest = require('supertest');


describe('App', () => {

    let request: any;

    beforeEach( async () => {
        request = supertest(app);
    });

    it('Should return a successful response for GET /', done => {
        request.get('/').expect(200, done);

    });

}); 