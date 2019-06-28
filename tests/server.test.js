const request = require('supertest');
const { server, parseRequest } = require('../server');
// const fs = require('fs');

describe('parseRequest function', () => {
  it('returns correct method and path', () => {
    const parsed = parseRequest('GET / HTTP/1.1');
    expect(parsed.method).toEqual('GET');
    expect(parsed.path).toEqual('/');
  });
});

describe('server routes', () => {
  it('returns 404 not found if path not found', () => {
    return request(server)
      .get('/badPath')
      .then(res => {
        expect(res.statusCode).toEqual(404);
        expect(res.text).toEqual(expect.stringContaining('not found'));
      });
  });
});
