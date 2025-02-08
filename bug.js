const http = require('http');

const server = http.createServer((req, res) => {
  // Without setting the content-length header, the response may not be sent completely,
  // leading to the client waiting indefinitely or receiving a partial response.
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});