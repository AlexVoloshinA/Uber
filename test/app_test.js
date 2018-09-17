const assert = require('assert');
const requset = require('supertest');
const app = require('../app');

describe('listen fot incoming get request', () => {
    it('handles a GET request to /api', (done) => {
        requset(app)
            .get('/api')
            .end((err,response) => {
                assert(response.body.hi === 'there');
                done();
            });
    });
});