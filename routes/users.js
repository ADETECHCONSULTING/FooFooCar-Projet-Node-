const Router = require('restify-router').Router;

module.exports = server => {
    server.get('/users',
            server.controllers.users.list
        );

    server.post('/users',
            server.middlewares.bodyParser.json(),
            server.controllers.users.create)
};