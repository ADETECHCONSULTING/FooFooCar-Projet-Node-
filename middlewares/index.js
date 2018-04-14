module.exports = server => {
    //require('./logger')(server);

    server.middlewares = {
        bodyParser: require('body-parser'),
        ensureCarExists: require('./ensureCarExists')(server)
        //ensureAuthenticated: require('./ensureAuthenticated')(server),
    }
};