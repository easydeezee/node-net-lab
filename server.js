const { createServer } = require('net');

const server = createServer(sock => {
  sock.on('data', data => {
    const groups = parseRequest(data);
    const { method, path } = groups;
    console.log(method, path);
  });

});

function parseRequest(data) {
  const req = data.toString().split('\n')[0];
  const method = req.split(' ')[0];
  const path = req.split(' ')[1];
  return { method, path };
}

server.listen(7890);

module.exports = { server, parseRequest };
