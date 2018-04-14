const Router = require('restify-router').Router;

module.exports = server => {
    server.get('/cars',
        server.controllers.cars.list);

    server.post('/cars',
        server.middlewares.bodyParser.json(),
        server.controllers.cars.create);

    server.put('/cars/:id',
        server.middlewares.bodyParser.json(),
        server.middlewares.ensureExists,
        server.controllers.cars.update);

    server.del('/cars/:id',
        server.controllers.cars.delete);
};