function parseRequest(data) {
  const req = data.toString().split('\n')[0];
  const method = req.split(' ')[0];
  const path = req.split(' ')[1];
  return { method, path };
}

module.exports = { parseRequest };
