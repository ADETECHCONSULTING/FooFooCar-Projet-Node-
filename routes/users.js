const Router = require('restify-router').Router;

module.exports = server => {
    server.get('/users',
        server.controllers.users.list
    );

    server.get('/users/:id',
        server.controllers.users.show
    );

    server.post('/users',
        server.middlewares.bodyParser.json(),
        server.controllers.users.create);

    server.put('/users/:id',
        server.middlewares.bodyParser.json(),
        server.middlewares.ensureUserExists,
        server.controllers.users.update);

    server.del('/users/:id',
        server.middlewares.bodyParser.json(),
        server.controllers.users.remove);
};