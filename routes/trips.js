const Router = require('restify-router').Router;

module.exports = server => {
    server.get('/trips',
        server.controllers.trips.list);

    server.post('/trips',
        server.middlewares.bodyParser.json(),
        server.controllers.trips.create);

    server.put('/trips/:id',
        server.middlewares.bodyParser.json(),
        server.middlewares.ensureCarExists,
        server.controllers.trips.update);

    server.del('/trips/:id',
        server.controllers.trips.delete);
};