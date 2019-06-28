const request = require('supertest');
const { server } = require('../server');
// const fs = require('fs');



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
