const { createServer } = require('net');

const server = createServer(sock => {
  sock.on('data', data => {
    console.log(data.toString());
  });

});

server.listen(7890);

