const { createServer } = require('net');

const server = createServer(sock => {
  sock.on('data', data => {
    const req = data.toString().split('\n')[0];
    // const groups = pattern.exec(req);
    // const { method, path } = groups;
    // console.log(method, path);
    console.log(parseRequest(req));

  });

});

function parseRequest(req) {
  const pattern = /(?<method>\w+)\s(?<path>\/.*)\s(?<protocol>.*)/g;
  return pattern.exec(req).groups;
}

server.listen(7890);

module.exports = { server, parseRequest };
