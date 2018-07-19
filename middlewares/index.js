module.exports = server => {
    //require('./logger')(server);

    server.middlewares = {
        bodyParser: require('body-parser'),
        ensureUserExists: require('./ensureUserExists')(server),
        ensureCarExists: require('./ensureCarExists')(server),
        ensureAuthenticated: require('./ensureAuthenticated')(server)
    }
};