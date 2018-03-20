const Router = require('restify-router').Router;
let routerInstance = new Router();
module.exports = server => {
    routerInstance
        .get('/',
            server.controllers.users.list
        );

    routerInstance.applyRoutes(server);
};