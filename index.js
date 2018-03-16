const restify = require('restify');

const server = restify.createServer();

server.get('/', (req, res, next) => {
    res.send('hello world');
});

server.listen(8080, () => {
    console.log(`server is listening on port : ${server.port}`);
});
