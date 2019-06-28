const { createServer } = require('net');
const parseRequest = require('./utilities/parse-request');

const server = createServer(sock => {
  sock.on('data', data => {
    const groups = parseRequest(data);
    const { method, path } = groups;
    console.log(method, path);

    if(path === '/' && method === 'GET') {
      console.log('get requested on path /');
    } else if (path === '/red.html' && method === 'GET') {
      console.log('requested red.html method get');
      const content = readFile(path);
      sock.write(content);
    }

  });

});

function readFile(path) {
  fs.readFile(path, (err, content) => {

  });
}

server.listen(7890);

module.exports = { server, parseRequest };
