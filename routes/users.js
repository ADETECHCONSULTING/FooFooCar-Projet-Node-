const Router = require('restify-router').Router;
let routerInstance = new Router();
module.exports = server => {
    routerInstance
        .get('/users',
            server.controllers.users.list
        );

    routerInstance.applyRoutes(server);
};