// Создайте простой HTTP-сервер с помощью Node.js, который отвечает на GET-запросы строкой "Hello, World!".

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.end('Hello World');
    }
})

server.listen(3000, () => console.log('server started'));