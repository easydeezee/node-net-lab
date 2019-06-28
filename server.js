const { createServer } = require('net');
const { parseRequest } = require('./utilities/parse-request');
const fs = require('fs');

const getMethods = {
  '/': {
    'file': '/hi.txt',
    'type': 'text/plain',
    'status': '200'
  },
  '/red': {
    'file': '/red.html',
    'type': 'text/html',
    'status': '200'
  },
  '/green': {
    'file': '/green.html',
    'type': 'text/html',
    'status': '200'
  },
  '/blue': {
    'file': '/blue.html',
    'type': 'text/html',
    'status': '200'
  },
  '/dog': {
    'file': '/dog.json',
    'type': 'application/json',
    'status': '200'
  }
};

const postMethods = {
  '/': {
    'file': '/sorry.txt',
    'type': 'text/plain',
    'status': '400'
  }
};

function getInfoFromPath(method, path) {    
  if(method === 'GET' && getMethods[path]) {
    return getMethods[path];
  } else if(method === 'POST' && getMethods[path]) {
    return postMethods[path];
  } else {
    return null;
  }
}

function makeHTTPPacket(content, pathInfo) {
  return `HTTP/1.1 ${pathInfo.status} OK
  Accept-Ranges: bytes
  Content-Length: ${content.length}
  Content-Type: ${pathInfo.type}

  ${content.toString()}
  `;
}

const server = createServer(sock => {
  sock.on('data', data => {
    const groups = parseRequest(data);
    const { method, path } = groups;

    let pathInfo = getInfoFromPath(method, path);
    if(!pathInfo) {
      pathInfo = {
        'file': '/not-found.html',
        'type': 'text/html',
        'status': '404'
      };
    }

    fs.readFile(`./public${pathInfo.file}`, (err, content) => {
      if(err) console.error(err);
      sock.write(makeHTTPPacket(content, pathInfo));
      sock.end();
    });
    
  });
});

server.listen(7890);

module.exports = { server, parseRequest };
