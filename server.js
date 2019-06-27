const { createServer } = require('net');

const server = createServer(sock => {
  sock.on('data', data => {
    const req = data.toString().split('\n')[0];
    const pattern = /(?<method>\w+)\s(?<path>\/\.*)\s(?<protocol>.*)/g;

    const groups = pattern.exec(req).groups;
    const { method, path, protocol } = groups;

    console.log(method);
    console.log(path);
    console.log(protocol);

  });

});

server.listen(7890);

