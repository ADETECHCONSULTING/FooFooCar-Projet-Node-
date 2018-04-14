module.exports = server => {
    //require('./logger')(server);

    server.middlewares = {
        bodyParser: require('body-parser'),
        ensureExists: require('./ensureExists')(server)
        //ensureAuthenticated: require('./ensureAuthenticated')(server),
    }
};