const { parseRequest } = require('../utilities/parse-request');

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
