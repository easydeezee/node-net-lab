const request = require('supertest');
const { server, parseRequest } = require('../server');
// const fs = require('fs');

describe('parseRequest function', () => {
  it('returns correct method and path', () => {
    const parsed = parseRequest('POST /red HTTP/1.1');
    expect(parsed.method).toEqual('POST');
    expect(parsed.path).toEqual('/red');
  });

  it('returns correct method and path', () => {
    const parsed = parseRequest('GET / HTTP/1.1');
    expect(parsed.method).toEqual('GET');
    expect(parsed.path).toEqual('/');
  });

  it('returns correct method and path', () => {
    const parsed = parseRequest('POST /blue HTTP/1.1');
    expect(parsed.method).toEqual('POST');
    expect(parsed.path).toEqual('/blue');
  });
});

// describe('server routes', () => {
//   it('returns 404 not found if path not found', () => {
//     return request(server)
//       .get('/badPath')
//       .then(res => {
//         expect(res.statusCode).toEqual(404);
//         expect(res.text).toEqual(expect.stringContaining('not found'));
//       });
//   });
// });
