const http = require('http');

// Creating server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

// Defining port
const port = 3000;

// Server listens on defined port
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
}); // Fixed syntax error: added missing opening parenthesis```
