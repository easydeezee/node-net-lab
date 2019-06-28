const request = require('supertest');
const { server } = require('../server');

describe('server tests', () => {
  it('returns 404 not found if path not found', () => {
    return request(server)
      .get('/badPath')
      .then(res => {
        expect(res.statusCode).toEqual(404);
        expect(res.text).toEqual(expect.stringContaining('404 Not Found'));
      });
  });
  it('return correct color from /blue path', () => {
    return request(server)
      .get('/blue')
      .then(res => {
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual(expect.stringContaining('Blue'));
      });
  });
  it('returns sorry text from path / and POST method', () => {
    return request(server)
      .post('/')
      .then(res => {
        expect(res.statusCode).toEqual(400);
        expect(res.text).toEqual(expect.stringContaining('sorry'));
      });
  });
  it('returns hi text from path / and GET method', () => {
    return request(server)
      .get('/')
      .then(res => {
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual(expect.stringContaining('hi'));
      });
  });
  it('returns dog JSON from path /dog', () => {
    return request(server)
      .get('/dog')
      .then(res => {
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual(expect.stringContaining('spock'));
      });
  });
});
