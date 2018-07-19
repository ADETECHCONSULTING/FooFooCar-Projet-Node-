const Router = require('restify-router').Router;

module.exports = server => {
    server.post('/auth',
        server.middlewares.bodyParser.json(),
        server.controllers.auth.login);
};